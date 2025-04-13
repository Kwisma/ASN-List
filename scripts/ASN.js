import axios from 'axios';
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import winston from 'winston';
import yaml from 'js-yaml';

// 读取外部的 config.yaml 文件
const config = yaml.load(fs.readFileSync('./config/config.yaml', 'utf8'));

// 分别从配置中获取两个列表：
// config.namelist 用于 data 目录
// config.country 用于 country 目录
const namelistData = config.namelist;
const countryList = config.country;

// 定义两个变量，分别控制不同目录下 CIDR 数据的请求
const scanning = true;         // 控制 config.namelist (data) 下是否请求 CIDR 数据
const scanningCountry = false; // 控制 config.country (country) 下是否请求 CIDR 数据

// 全局变量
const nameASN = [];
const ruleput = [];
const rulenumset = [];
const ruleset = [];

// ------------------------------
// 增加随机指纹函数
// ------------------------------
function getRandomUserAgent() {
    const userAgentList = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15",
        "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36"
        // 可继续添加其他浏览器指纹
    ];
    return userAgentList[Math.floor(Math.random() * userAgentList.length)];
}

// 生成随机地理位置（经纬度）示例
function getRandomGeoLocation() {
    // 例如，生成全球范围内的随机经纬度
    const latitude = (Math.random() * 180 - 90).toFixed(6);   // -90 到 90
    const longitude = (Math.random() * 360 - 180).toFixed(6); // -180 到 180
    return `${latitude},${longitude}`;
}

// 生成随机访客 ID，采用简单的 UUID 模拟
function getRandomVisitorID() {
    // 生成简单的 UUID（示例用途，不保证安全性）
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getRandomFingerprintHeaders() {
    return {
        "User-Agent": getRandomUserAgent(),
        "Accept-Language": "en-US,en;q=0.9",
        "Sec-Ch-Ua": `"Not.A/Brand";v="8", "Chromium";v="115", "Google Chrome";v="115"`,
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": `"Windows"`,
        // 附加随机 fingerprint 参数
        "X-Client-Time": new Date().toISOString(),
        "X-Geo-Location": getRandomGeoLocation(),
        "X-Visitor-ID": getRandomVisitorID()
    };
}
// ------------------------------

// 获取当前函数名（用于日志打印）
function getFunctionName() {
    const stack = new Error().stack;
    const stackLines = stack.split('\n');
    const callerLine = stackLines[3] || stackLines[2];
    const match = callerLine.match(/at (\w+)/);
    return match ? match[1] : 'unknown';
}

// 自定义时间格式化函数
function formatTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 创建 Logger
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp({ format: formatTimestamp }),
                winston.format.printf(({ timestamp, level, message }) => {
                    const functionName = getFunctionName();
                    return `${timestamp} [${level}] ${functionName} - ${message}`;
                })
            ),
        })
    ],
});

// 获取中国时间（中文格式）
function getChinaTime() {
    const options = {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const localTime = new Intl.DateTimeFormat('zh-CN', options).format(new Date());
    logger.info(`获取时间：${localTime}`);
    return localTime.replace(/\//g, '-');
}

// 初始化文件，支持传入目录（默认为 'country'）
function initFile(name, directory = 'country') {
    const localTime = getChinaTime();
    const header = `# ${name} 的 ASN 信息。 (https://github.com/Kwisma/ASN-List)\n`;
    const lastUpdated = `# 最后更新： CST ${localTime}\n`;
    const fileContent = header + lastUpdated;
    const filemd = `
# ASN-List

实时更新 ${name} 的 ASN 和 IP 数据库。

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

mihomo(clash.meta)

<pre><code class="language-javascript">
rule-providers:
  ASN${name}:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/${directory}/${name}/ASN.${name}.yaml"
    path: ./ruleset/ASN.${name}.yaml
    interval: 86400
    format: yaml
</code></pre>
    `;
    const dir = path.join('./', directory, name);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const files = [
        `./${directory}/${name}/ASN.${name}.list`,
        `./${directory}/${name}/ASN.${name}.yaml`,
        `./${directory}/${name}/CIDR.${name}.list`,
        `./${directory}/${name}/CIDR.${name}.yaml`,
    ];
    const filesmd = [`./${directory}/${name}/README.md`];
    logger.info("初始化文件...");
    files.forEach((file) => {
        fs.writeFileSync(file, fileContent, { encoding: 'utf8' });
    });
    filesmd.forEach((file) => {
        fs.writeFileSync(file, filemd, { encoding: 'utf8' });
    });
    logger.info("文件初始化完成！");
}

// 定义 asnInfo 函数，用于写入 ASN 文件头部信息，支持传入目录（默认为 'country'）
function asnInfo(name, asnNumber, directory = 'country') {
    const fileasn = `# ASN: ${asnNumber}\n`;
    const footer = "# 由 Kwisma 制作，保留所有权利。\n\n";
    const fileContent = fileasn + footer;
    const files = [
        `./${directory}/${name}/ASN.${name}.list`,
        `./${directory}/${name}/ASN.${name}.yaml`,
        `./${directory}/${name}/CIDR.${name}.list`,
        `./${directory}/${name}/CIDR.${name}.yaml`,
    ];
    files.forEach((file) => {
        fs.appendFileSync(file, fileContent, { encoding: 'utf8' });
    });
    // 在 yaml 文件中添加 payload 标记
    fs.appendFileSync(`./${directory}/${name}/ASN.${name}.yaml`, `payload:\n`, { encoding: 'utf8' });
    fs.appendFileSync(`./${directory}/${name}/CIDR.${name}.yaml`, `payload:\n`, { encoding: 'utf8' });
}

// 请求数据并重试
async function fetchWithRetry(url, options, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            return await axios.get(url, options);
        } catch (error) {
            if (i === retries - 1) {
                throw error;
            }
            logger.warn(`请求失败，重试 ${i + 1}/${retries}...`);
        }
    }
}

// 获取全称，payload 可根据需要扩展
function getFullName(name) {
    const entry = payload().find(item => item.name === name);
    return entry ? entry.nametry : null;
}

// 保存 ASN 数据，支持选择目录（默认为 'country'）
// 根据目录不同，使用不同的变量控制 CIDR 数据的请求:
//   - 若目录为 data，则使用 scanning 控制
//   - 若目录为 country，则使用 scanningCountry 控制
async function saveLatestASN(name, directory = 'country') {
    let url;
    if (directory === 'data') {
        url = `https://bgp.he.net/search?search[search]=${name}`;
    } else {
        url = `https://bgp.he.net/country/${name}`;
    }
    const headers = {
        ...getRandomFingerprintHeaders()
    };
    initFile(name, directory);
    try {
        logger.info(`开始请求 ASN 数据 (${name} in ${directory})...`);
        const { data } = await fetchWithRetry(url, { headers });
        logger.info("数据请求成功！");
        const $ = cheerio.load(data);
        const asns = $('#asns tbody tr');
        logger.info(`共找到 ${asns.length} 个 ASN 条目，开始写入文件...`);
        nameASN.push(name + ' ' + getFullName(name));
        asnInfo(name, asns.length, directory);
        ruleset.push(`  - RULE-SET,ASN${name},Proxy\n`);
        ruleput.push(`
  ASN${name}:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/${directory}/${name}/ASN.${name}.yaml"
    path: ./ruleset/ASN.${name}.yaml
    interval: 86400
    format: yaml
`);
        rulenumset.push(`
  ASN${name}:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/${directory}/${name}/ASN.${name}.yaml"
    path: ./ruleset/ASN.${name}.yaml
`);
        let index = 0;
        for (let asn of asns) {
            const asnNumber = $(asn).find('td:nth-child(1) a').text().replace('AS', '').trim();
            const asnName = $(asn).find('td:nth-child(2)').text().trim();
            if (asnName) {
                const asnInfoLine = `IP-ASN,${asnNumber},no-resolve\n`;
                const yamlString = `  - IP-ASN,${asnNumber},no-resolve\n`;
                fs.appendFileSync(`./${directory}/${name}/ASN.${name}.list`, asnInfoLine, { encoding: 'utf8' });
                fs.appendFileSync(`./${directory}/${name}/ASN.${name}.yaml`, yamlString, { encoding: 'utf8' });
                logger.info(`开始处理 ASN #${index + 1}: ${asnNumber}`);
                index++;
            }
        }
        
        // 根据目录判断是否请求 CIDR 数据
        if ((directory === 'data' && scanning) || (directory === 'country' && scanningCountry)) {
            try {
                logger.info("开始请求 CIDR 数据...");
                const cidrUrl = `https://bgp.he.net/AS${name}`;
                const { data: cidrData } = await fetchWithRetry(cidrUrl, { headers });
                logger.info("CIDR 数据请求成功！");
                const $cidr = cheerio.load(cidrData);
                const cidrs = $('#table_prefixes4 tbody tr');
                logger.info(`共找到 ${cidrs.length} 个 CIDR 条目，开始写入文件...`);
                let index4 = 0;
                for (let cidr of cidrs) {
                    const cidrNumber = $cidr(cidr).find('td:nth-child(1)').text().trim();
                    if (cidrNumber && !cidrNumber.includes(':')) {
                        const info = `${cidrNumber}\n`;
                        const yamlString = `  - ${cidrNumber}\n`;
                        fs.appendFileSync(`./${directory}/${name}/CIDR.${name}.list`, info, { encoding: 'utf8' });
                        fs.appendFileSync(`./${directory}/${name}/CIDR.${name}.yaml`, yamlString, { encoding: 'utf8' });
                        logger.info(`处理 CIDR #${index4 + 1}: ${cidrNumber}`);
                        index4++;
                    }
                }
                const cidrs6 = $('#table_prefixes6 tbody tr');
                logger.info(`共找到 ${cidrs6.length} 个 CIDR6 条目，开始写入文件...`);
                let index6 = 0;
                for (let cidr of cidrs6) {
                    const cidrNumber = $cidr(cidr).find('td:nth-child(1)').text().trim();
                    if (cidrNumber && cidrNumber.includes(':')) {
                        const info = `${cidrNumber}\n`;
                        const yamlString = `  - ${cidrNumber}\n`;
                        fs.appendFileSync(`./${directory}/${name}/CIDR.${name}.list`, info, { encoding: 'utf8' });
                        fs.appendFileSync(`./${directory}/${name}/CIDR.${name}.yaml`, yamlString, { encoding: 'utf8' });
                        logger.info(`处理 CIDR6 #${index6 + 1}: ${cidrNumber}`);
                        index6++;
                    }
                }
            } catch (error) {
                logger.error('请求 CIDR 数据失败:', error);
            }
        }
        
        // 写入整合后的 README 信息（示例）
        const ASNListItems = nameASN.map(item => `- ASN-${item}`).join('\n');
        const datamd = `
# ASN-List

实时更新的 ASN 和 IP 数据库。

以下内容整合了来自不同目录的数据：

${ASNListItems}

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

## mihomo规则

<pre><code class="language-javascript">
rules:
${ruleset.join('')}
</code></pre>
        `;
        fs.writeFileSync(`README.md`, datamd, { encoding: 'utf8' });
        logger.info(`ASN 数据写入成功 (${name} in ${directory})！`);
    } catch (error) {
        logger.error(`请求 ASN 数据失败 (${name} in ${directory}):`, error);
    }
}

// 分别处理 data 和 country 目录下的名称
namelistData.forEach(item => {
    saveLatestASN(item, 'data');
});
countryList.forEach(item => {
    saveLatestASN(item, 'country');
});

// 通用的 payload 数据结构，按需扩展
function payload() {
    return [
        {
            "name": "US",
            "nametry": "United States"
        },
        {
            "name": "BR",
            "nametry": "Brazil"
        },
        {
            "name": "CN",
            "nametry": "China"
        },
        {
            "name": "RU",
            "nametry": "Russian Federation"
        },
        {
            "name": "IN",
            "nametry": "India"
        },
        {
            "name": "GB",
            "nametry": "United Kingdom"
        },
        {
            "name": "ID",
            "nametry": "Indonesia"
        },
        {
            "name": "DE",
            "nametry": "Germany"
        },
        {
            "name": "AU",
            "nametry": "Australia"
        },
        {
            "name": "PL",
            "nametry": "Poland"
        },
        {
            "name": "CA",
            "nametry": "Canada"
        },
        {
            "name": "UA",
            "nametry": "Ukraine"
        },
        {
            "name": "FR",
            "nametry": "France"
        },
        {
            "name": "BD",
            "nametry": "Bangladesh"
        },
        {
            "name": "NL",
            "nametry": "Netherlands"
        },
        {
            "name": "IT",
            "nametry": "Italy"
        },
        {
            "name": "HK",
            "nametry": "Hong Kong"
        },
        {
            "name": "RO",
            "nametry": "Romania"
        },
        {
            "name": "ES",
            "nametry": "Spain"
        },
        {
            "name": "AR",
            "nametry": "Argentina"
        },
        {
            "name": "JP",
            "nametry": "Japan"
        },
        {
            "name": "CH",
            "nametry": "Switzerland"
        },
        {
            "name": "KR",
            "nametry": "Korea, Republic of"
        },
        {
            "name": "TR",
            "nametry": "Turkey"
        },
        {
            "name": "SE",
            "nametry": "Sweden"
        },
        {
            "name": "VN",
            "nametry": "Viet Nam"
        },
        {
            "name": "ZA",
            "nametry": "South Africa"
        },
        {
            "name": "IR",
            "nametry": "Iran, Islamic Republic of"
        },
        {
            "name": "BG",
            "nametry": "Bulgaria"
        },
        {
            "name": "AT",
            "nametry": "Austria"
        },
        {
            "name": "NZ",
            "nametry": "New Zealand"
        },
        {
            "name": "MX",
            "nametry": "Mexico"
        },
        {
            "name": "CZ",
            "nametry": "Czech Republic"
        },
        {
            "name": "SG",
            "nametry": "Singapore"
        },
        {
            "name": "PH",
            "nametry": "Philippines"
        },
        {
            "name": "TH",
            "nametry": "Thailand"
        },
        {
            "name": "CO",
            "nametry": "Colombia"
        },
        {
            "name": "DK",
            "nametry": "Denmark"
        },
        {
            "name": "TW",
            "nametry": "Taiwan"
        },
        {
            "name": "NO",
            "nametry": "Norway"
        },
        {
            "name": "CL",
            "nametry": "Chile"
        },
        {
            "name": "BE",
            "nametry": "Belgium"
        },
        {
            "name": "FI",
            "nametry": "Finland"
        },
        {
            "name": "PK",
            "nametry": "Pakistan"
        },
        {
            "name": "IL",
            "nametry": "Israel"
        },
        {
            "name": "MY",
            "nametry": "Malaysia"
        },
        {
            "name": "EU",
            "nametry": "European Union"
        },
        {
            "name": "LV",
            "nametry": "Latvia"
        },
        {
            "name": "HU",
            "nametry": "Hungary"
        },
        {
            "name": "IE",
            "nametry": "Ireland"
        },
        {
            "name": "NG",
            "nametry": "Nigeria"
        },
        {
            "name": "SI",
            "nametry": "Slovenia"
        },
        {
            "name": "GR",
            "nametry": "Greece"
        },
        {
            "name": "EC",
            "nametry": "Ecuador"
        },
        {
            "name": "KE",
            "nametry": "Kenya"
        },
        {
            "name": "VE",
            "nametry": "Venezuela, Bolivarian Republic of"
        },
        {
            "name": "SK",
            "nametry": "Slovakia"
        },
        {
            "name": "LT",
            "nametry": "Lithuania"
        },
        {
            "name": "EE",
            "nametry": "Estonia"
        },
        {
            "name": "IQ",
            "nametry": "Iraq"
        },
        {
            "name": "PE",
            "nametry": "Peru"
        },
        {
            "name": "MD",
            "nametry": "Moldova, Republic of"
        },
        {
            "name": "KZ",
            "nametry": "Kazakhstan"
        },
        {
            "name": "RS",
            "nametry": "Serbia"
        },
        {
            "name": "SA",
            "nametry": "Saudi Arabia"
        },
        {
            "name": "NP",
            "nametry": "Nepal"
        },
        {
            "name": "HR",
            "nametry": "Croatia"
        },
        {
            "name": "DO",
            "nametry": "Dominican Republic"
        },
        {
            "name": "LB",
            "nametry": "Lebanon"
        },
        {
            "name": "CY",
            "nametry": "Cyprus"
        },
        {
            "name": "PT",
            "nametry": "Portugal"
        },
        {
            "name": "AE",
            "nametry": "United Arab Emirates"
        },
        {
            "name": "PA",
            "nametry": "Panama"
        },
        {
            "name": "MM",
            "nametry": "Myanmar"
        },
        {
            "name": "GE",
            "nametry": "Georgia"
        },
        {
            "name": "KH",
            "nametry": "Cambodia"
        },
        {
            "name": "BY",
            "nametry": "Belarus"
        },
        {
            "name": "LU",
            "nametry": "Luxembourg"
        },
        {
            "name": "AM",
            "nametry": "Armenia"
        },
        {
            "name": "GH",
            "nametry": "Ghana"
        },
        {
            "name": "AL",
            "nametry": "Albania"
        },
        {
            "name": "TZ",
            "nametry": "Tanzania, United Republic of"
        },
        {
            "name": "CR",
            "nametry": "Costa Rica"
        },
        {
            "name": "HN",
            "nametry": "Honduras"
        },
        {
            "name": "UZ",
            "nametry": "Uzbekistan"
        },
        {
            "name": "PR",
            "nametry": "Puerto Rico"
        },
        {
            "name": "EG",
            "nametry": "Egypt"
        },
        {
            "name": "PY",
            "nametry": "Paraguay"
        },
        {
            "name": "SC",
            "nametry": "Seychelles"
        },
        {
            "name": "IS",
            "nametry": "Iceland"
        },
        {
            "name": "AZ",
            "nametry": "Azerbaijan"
        },
        {
            "name": "GT",
            "nametry": "Guatemala"
        },
        {
            "name": "KW",
            "nametry": "Kuwait"
        },
        {
            "name": "AO",
            "nametry": "Angola"
        },
        {
            "name": "AF",
            "nametry": "Afghanistan"
        },
        {
            "name": "MN",
            "nametry": "Mongolia"
        },
        {
            "name": "PS",
            "nametry": "Palestine"
        },
        {
            "name": "UG",
            "nametry": "Uganda"
        },
        {
            "name": "KG",
            "nametry": "Kyrgyzstan"
        },
        {
            "name": "BO",
            "nametry": "Bolivia, Plurinational State of"
        },
        {
            "name": "MK",
            "nametry": "Macedonia, The Former Yugoslav Republic of"
        },
        {
            "name": "MU",
            "nametry": "Mauritius"
        },
        {
            "name": "MT",
            "nametry": "Malta"
        },
        {
            "name": "CD",
            "nametry": "Congo, The Democratic Republic of the"
        },
        {
            "name": "BA",
            "nametry": "Bosnia and Herzegovina"
        },
        {
            "name": "SV",
            "nametry": "El Salvador"
        },
        {
            "name": "JO",
            "nametry": "Jordan"
        },
        {
            "name": "VG",
            "nametry": "Virgin Islands, British"
        },
        {
            "name": "UY",
            "nametry": "Uruguay"
        },
        {
            "name": "PG",
            "nametry": "Papua New Guinea"
        },
        {
            "name": "LA",
            "nametry": "Lao People's Democratic Republic"
        },
        {
            "name": "BZ",
            "nametry": "Belize"
        },
        {
            "name": "ZW",
            "nametry": "Zimbabwe"
        },
        {
            "name": "MZ",
            "nametry": "Mozambique"
        },
        {
            "name": "CW",
            "nametry": "Curaçao"
        },
        {
            "name": "CM",
            "nametry": "Cameroon"
        },
        {
            "name": "MW",
            "nametry": "Malawi"
        },
        {
            "name": "BW",
            "nametry": "Botswana"
        },
        {
            "name": "RW",
            "nametry": "Rwanda"
        },
        {
            "name": "NI",
            "nametry": "Nicaragua"
        },
        {
            "name": "BT",
            "nametry": "Bhutan"
        },
        {
            "name": "TJ",
            "nametry": "Tajikistan"
        },
        {
            "name": "LY",
            "nametry": "Libya"
        },
        {
            "name": "GI",
            "nametry": "Gibraltar"
        },
        {
            "name": "BF",
            "nametry": "Burkina Faso"
        },
        {
            "name": "MA",
            "nametry": "Morocco"
        },
        {
            "name": "LK",
            "nametry": "Sri Lanka"
        },
        {
            "name": "ZM",
            "nametry": "Zambia"
        },
        {
            "name": "TN",
            "nametry": "Tunisia"
        },
        {
            "name": "CI",
            "nametry": "Côte d'Ivoire"
        },
        {
            "name": "ME",
            "nametry": "Montenegro"
        },
        {
            "name": "BH",
            "nametry": "Bahrain"
        },
        {
            "name": "LI",
            "nametry": "Liechtenstein"
        },
        {
            "name": "SS",
            "nametry": "South Sudan"
        },
        {
            "name": "IM",
            "nametry": "Isle of Man"
        },
        {
            "name": "SL",
            "nametry": "Sierra Leone"
        },
        {
            "name": "QA",
            "nametry": "Qatar"
        },
        {
            "name": "SO",
            "nametry": "Somalia"
        },
        {
            "name": "BM",
            "nametry": "Bermuda"
        },
        {
            "name": "BJ",
            "nametry": "Benin"
        },
        {
            "name": "OM",
            "nametry": "Oman"
        },
        {
            "name": "GN",
            "nametry": "Guinea"
        },
        {
            "name": "DZ",
            "nametry": "Algeria"
        },
        {
            "name": "CG",
            "nametry": "Congo"
        },
        {
            "name": "TD",
            "nametry": "Chad"
        },
        {
            "name": "SN",
            "nametry": "Senegal"
        },
        {
            "name": "NC",
            "nametry": "New Caledonia"
        },
        {
            "name": "NA",
            "nametry": "Namibia"
        },
        {
            "name": "GA",
            "nametry": "Gabon"
        },
        {
            "name": "FJ",
            "nametry": "Fiji"
        },
        {
            "name": "TT",
            "nametry": "Trinidad and Tobago"
        },
        {
            "name": "MV",
            "nametry": "Maldives"
        },
        {
            "name": "LR",
            "nametry": "Liberia"
        },
        {
            "name": "AG",
            "nametry": "Antigua and Barbuda"
        },
        {
            "name": "KY",
            "nametry": "Cayman Islands"
        },
        {
            "name": "SZ",
            "nametry": "Swaziland"
        },
        {
            "name": "MO",
            "nametry": "Macao"
        },
        {
            "name": "HT",
            "nametry": "Haiti"
        },
        {
            "name": "BS",
            "nametry": "Bahamas"
        },
        {
            "name": "VU",
            "nametry": "Vanuatu"
        },
        {
            "name": "TL",
            "nametry": "Timor-Leste"
        },
        {
            "name": "SD",
            "nametry": "Sudan"
        },
        {
            "name": "JM",
            "nametry": "Jamaica"
        },
        {
            "name": "VI",
            "nametry": "Virgin Islands, U.S."
        },
        {
            "name": "SM",
            "nametry": "San Marino"
        },
        {
            "name": "MG",
            "nametry": "Madagascar"
        },
        {
            "name": "JE",
            "nametry": "Jersey"
        },
        {
            "name": "GM",
            "nametry": "Gambia"
        },
        {
            "name": "SB",
            "nametry": "Solomon Islands"
        },
        {
            "name": "ML",
            "nametry": "Mali"
        },
        {
            "name": "BI",
            "nametry": "Burundi"
        },
        {
            "name": "WS",
            "nametry": "Samoa"
        },
        {
            "name": "LS",
            "nametry": "Lesotho"
        },
        {
            "name": "GU",
            "nametry": "Guam"
        },
        {
            "name": "GG",
            "nametry": "Guernsey"
        },
        {
            "name": "GD",
            "nametry": "Grenada"
        },
        {
            "name": "CV",
            "nametry": "Cape Verde"
        },
        {
            "name": "TG",
            "nametry": "Togo"
        },
        {
            "name": "RE",
            "nametry": "RÉUNION"
        },
        {
            "name": "NE",
            "nametry": "Niger"
        },
        {
            "name": "FO",
            "nametry": "Faroe Islands"
        },
        {
            "name": "BN",
            "nametry": "Brunei Darussalam"
        },
        {
            "name": "BB",
            "nametry": "Barbados"
        },
        {
            "name": "MR",
            "nametry": "Mauritania"
        },
        {
            "name": "KN",
            "nametry": "Saint Kitts and Nevis"
        },
        {
            "name": "GP",
            "nametry": "Guadeloupe"
        },
        {
            "name": "ET",
            "nametry": "Ethiopia"
        },
        {
            "name": "SR",
            "nametry": "Suriname"
        },
        {
            "name": "LC",
            "nametry": "Saint Lucia"
        },
        {
            "name": "GQ",
            "nametry": "Equatorial Guinea"
        },
        {
            "name": "DM",
            "nametry": "Dominica"
        },
        {
            "name": "TM",
            "nametry": "Turkmenistan"
        },
        {
            "name": "SY",
            "nametry": "Syrian Arab Republic"
        },
        {
            "name": "MH",
            "nametry": "Marshall Islands"
        },
        {
            "name": "GY",
            "nametry": "Guyana"
        },
        {
            "name": "GF",
            "nametry": "French Guiana"
        },
        {
            "name": "CU",
            "nametry": "Cuba"
        },
        {
            "name": "YE",
            "nametry": "Yemen"
        },
        {
            "name": "PF",
            "nametry": "French Polynesia"
        },
        {
            "name": "MQ",
            "nametry": "Martinique"
        },
        {
            "name": "MF",
            "nametry": "Saint Martin (French part)"
        },
        {
            "name": "FM",
            "nametry": "Micronesia, Federated States of"
        },
        {
            "name": "DJ",
            "nametry": "Djibouti"
        },
        {
            "name": "BQ",
            "nametry": "Bonaire, Sint Eustatius and Saba"
        },
        {
            "name": "TO",
            "nametry": "Tonga"
        },
        {
            "name": "PW",
            "nametry": "Palau"
        },
        {
            "name": "NR",
            "nametry": "Nauru"
        },
        {
            "name": "AW",
            "nametry": "Aruba"
        },
        {
            "name": "AI",
            "nametry": "Anguilla"
        },
        {
            "name": "VC",
            "nametry": "Saint Vincent and the Grenadines"
        },
        {
            "name": "SX",
            "nametry": "Sint Maarten (Dutch part)"
        },
        {
            "name": "KI",
            "nametry": "Kiribati"
        },
        {
            "name": "CF",
            "nametry": "Central African Republic"
        },
        {
            "name": "BL",
            "nametry": "Saint Barthélemy"
        },
        {
            "name": "VA",
            "nametry": "Holy See (Vatican City State)"
        },
        {
            "name": "TV",
            "nametry": "Tuvalu"
        },
        {
            "name": "TK",
            "nametry": "Tokelau"
        },
        {
            "name": "MC",
            "nametry": "Monaco"
        },
        {
            "name": "AS",
            "nametry": "American Samoa"
        },
        {
            "name": "AD",
            "nametry": "Andorra"
        },
        {
            "name": "TC",
            "nametry": "Turks and Caicos Islands"
        },
        {
            "name": "ST",
            "nametry": "Sao Tome and Principe"
        },
        {
            "name": "NF",
            "nametry": "Norfolk Island"
        },
        {
            "name": "MP",
            "nametry": "Northern Mariana Islands"
        },
        {
            "name": "KM",
            "nametry": "Comoros"
        },
        {
            "name": "GW",
            "nametry": "Guinea-Bissau"
        },
        {
            "name": "FK",
            "nametry": "Falkland Islands (Malvinas)"
        },
        {
            "name": "CK",
            "nametry": "Cook Islands"
        },
        {
            "name": "AP",
            "nametry": ""
        },
        {
            "name": "YT",
            "nametry": "Mayotte"
        },
        {
            "name": "WF",
            "nametry": "Wallis and Futuna"
        },
        {
            "name": "UK",
            "nametry": "United Kingdom"
        },
        {
            "name": "PM",
            "nametry": "Saint Pierre and Miquelon"
        },
        {
            "name": "NU",
            "nametry": "Niue"
        },
        {
            "name": "MS",
            "nametry": "Montserrat"
        },
        {
            "name": "KP",
            "nametry": "Korea, Democratic People's Republic of"
        },
        {
            "name": "IO",
            "nametry": "British Indian Ocean Territory"
        },
        {
            "name": "GL",
            "nametry": "Greenland"
        },
        {
            "name": "ER",
            "nametry": "Eritrea"
        },
        {
            "name": "AX",
            "nametry": "Åland Islands"
        },
        {
            "name": "AN",
            "nametry": "Netherlands Antilles"
        }];
}

