import axios from 'axios';
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import winston from 'winston';
import yaml from 'js-yaml';

// 读取外部的 config.yaml 文件
const config = yaml.load(fs.readFileSync('./config/config.yaml', 'utf8'));
const namelist = config.country;
const nameASN = [];
const ruleput = [];
const rulenumset = [];
const ruleset = [];
const scanning = true;

// 获取当前函数名
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
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;  // 格式化为 "YYYY-MM-DD HH:mm:ss"
}

// 创建 Logger
const logger = winston.createLogger({
    level: 'info',  // 默认日志级别
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp({ format: formatTimestamp }),  // 使用自定义时间格式
                winston.format.printf(({ timestamp, level, message }) => {
                    const functionName = getFunctionName();
                    // 格式: [日志级别] 年月日时分秒 函数名 - 消息内容
                    return `${timestamp} [${level}] ${functionName} - ${message}`;
                })
            ),
        })
    ],
});

// 获取中国时间
function getChinaTime() {
    const options = {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false  // 使用24小时制
    };
    const localTime = new Intl.DateTimeFormat('zh-CN', options).format(new Date());  // 使用中文格式
    logger.info(`获取时间：${localTime}`);
    return localTime.replace(/\//g, '-');  // 将日期中的“/”替换为“-”
}
// 初始化文件
function initFile(name) {
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
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/${name}/ASN.${name}.yaml"
  path: ./ruleset/ASN.${name}.yaml
  interval: 86400
  format: yaml
</code></pre>

或者

<pre><code class="language-javascript">
rule-providers:
  ASN${name}:
  <<: *classical
  url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/${name}/ASN.${name}.yaml"
  path: ./ruleset/ASN.${name}.yaml
</code></pre>
    
Surge
    
<pre><code class="language-javascript">
[Rule]
# > ${name} ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/${name}/ASN.${name}.list, Direct
</code></pre>
    
Quantumult X
    
<pre><code class="language-javascript">
[filter_remote]
# ${name} ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/${name}/ASN.${name}.list, tag=${name}ASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
`;
    // 创建以 name 命名的文件夹，所有文件都保存到该目录下
    const dir = path.join('./', 'country', name);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const files = [
        `./country/${name}/ASN.${name}.list`,
        `./country/${name}/ASN.${name}.yaml`,
        `./country/${name}/CIDR.${name}.yaml`,
        `./country/${name}/CIDR.${name}.list`,
    ];
    const filesmd = [`./country/${name}/README.md`];
    logger.info("初始化文件...");
    // 遍历文件列表并写入内容
    files.forEach((file) => {
        fs.writeFileSync(file, fileContent, { encoding: 'utf8' });
    });
    filesmd.forEach((file) => {
        fs.writeFileSync(file, filemd, { encoding: 'utf8' });
    });
    logger.info("文件初始化完成！");
}

// 文件头部信息
function asnInfo(name, asnNumber) {
    const fileasn = `# ASN: ${asnNumber}\n`;
    const footer = "# 由 Kwisma 制作，保留所有权利。\n\n";
    const fileContent = fileasn + footer;
    const files = [
        `./country/${name}/ASN.${name}.list`,
        `./country/${name}/ASN.${name}.yaml`,
        `./country/${name}/CIDR.${name}.yaml`,
        `./country/${name}/CIDR.${name}.list`,
    ];
    // 遍历文件列表并写入内容
    files.forEach((file) => {
        fs.appendFileSync(file, fileContent, { encoding: 'utf8' });
    });
    fs.appendFileSync(`./country/${name}/ASN.${name}.yaml`, `payload:\n`, { encoding: 'utf8' });
    fs.appendFileSync(`./country/${name}/CIDR.${name}.yaml`, `payload:\n`, { encoding: 'utf8' });
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

// 获取全称
function getFullName(name) {
    const entry = payload().find(item => item.name === name);
    return entry ? entry.nametry : null;
}

// 保存 ASN 数据
async function saveLatestASN(name) {
    const url = `https://bgp.he.net/country/${name}`;
    const headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    };
    initFile(name);
    try {
        logger.info("开始请求 ASN 数据...");
        const { data } = await fetchWithRetry(url, { headers });
        logger.info("数据请求成功！");
        const $ = cheerio.load(data);
        const asns = $('#asns tbody tr');
        logger.info(`共找到 ${asns.length} 个 ASN 条目，开始写入文件...`);
        nameASN.push(name + ' ' + getFullName(name));
        asnInfo(name, asns.length);
        ruleset.push(`  - RULE-SET,ASN${name},Proxy\n`);
        ruleput.push(`
  ASN${name}:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/${name}/ASN.${name}.yaml"
    path: ./ruleset/ASN.${name}.yaml
    interval: 86400
    format: yaml
`)
        rulenumset.push(`
  ASN${name}:
    <<: *classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/${name}/ASN.${name}.yaml"
    path: ./ruleset/ASN.${name}.yaml
`)
        let index = 0;
        for (let asn of asns) {
            const asnNumber = $(asn).find('td:nth-child(1) a').text().replace('AS', '').trim();
            const asnName = $(asn).find('td:nth-child(2)').text().trim();
            if (asnName) {
                const asnInfo = `IP-ASN,${asnNumber},no-resolve\n`;
                const yamlString = `  - IP-ASN,${asnNumber},no-resolve\n`
                fs.appendFileSync(`./country/${name}/ASN.${name}.list`, asnInfo, { encoding: 'utf8' });
                fs.appendFileSync(`./country/${name}/ASN.${name}.yaml`, yamlString, { encoding: 'utf8' });
                logger.info(`开始处理 ASN #${index + 1}: ${asnNumber}`);
                index++;
                const url = `https://bgp.he.net/AS${asnNumber}`;
                if (scanning) {
                    try {
                        logger.info("开始请求 CIDR 数据...");
                        const { data } = await fetchWithRetry(url, { headers });
                        logger.info("CIDR 数据请求成功！");
                        const $ = cheerio.load(data);
                        const cidrs = $('#table_prefixes4 tbody tr');
                        logger.info(`共找到 ${cidrs.length} 个 CIDR 条目，开始写入文件...`);
                        let index4 = 0;
                        for (let cidr of cidrs) {
                            const cidrNumber = $(cidr).find('td:nth-child(1)').text().trim();
                            if (cidrNumber && !cidrNumber.includes(':')) {
                                const asnInfo = `${cidrNumber}\n`;
                                const yamlString = `  - ${cidrNumber}\n`
                                fs.appendFileSync(`./country/${name}/CIDR.${name}.list`, asnInfo, { encoding: 'utf8' });
                                fs.appendFileSync(`./country/${name}/CIDR.${name}.yaml`, yamlString, { encoding: 'utf8' });
                                logger.info(`处理 CIDR #${index4 + 1}: ${cidrNumber}`);
                                index4++;
                            }
                        }
                        const cidrs6 = $('#table_prefixes6 tbody tr');
                        logger.info(`共找到 ${cidrs6.length} 个 CIDR6 条目，开始写入文件...`);
                        let index6 = 0;
                        for (let cidr of cidrs6) {
                            const cidrNumber = $(cidr).find('td:nth-child(1)').text().trim();
                            if (cidrNumber && cidrNumber.includes(':')) {
                                const asnInfo = `${cidrNumber}\n`;
                                const yamlString = `  - ${cidrNumber}\n`
                                fs.appendFileSync(`./country/${name}/CIDR.${name}.list`, asnInfo, { encoding: 'utf8' });
                                fs.appendFileSync(`./country/${name}/CIDR.${name}.yaml`, yamlString, { encoding: 'utf8' });
                                logger.info(`处理 CIDR6 #${index6 + 1}: ${cidrNumber}`);
                                index6++;
                            }

                        }
                    } catch (error) {
                        logger.error('请求 CIDR 数据失败:', error);
                    }
                }
            }
        }
        const ASNListItems = nameASN.map(name => `- ASN-${name}`).join('\n');
        const datamd = `
# ASN-List

实时更新的 ASN 和 IP 数据库。
data 目录是各个服务商的 ASN

country 目录ASN如下：

${ASNListItems}

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

## mihomo规则

<pre><code class="language-javascript">
rules:
${ruleset.map(item => item.toString()).join('')}
</code></pre>

## 常规配置

<pre><code class="language-javascript">
rule-providers:
${ruleput.map(item => item.toString()).join('')}
</code></pre>

# 高级配置

<pre><code class="language-javascript">
rule-providers:
${rulenumset.map(item => item.toString()).join('')}
</code></pre>
`;
        fs.writeFileSync(`README-ry.md`, datamd, { encoding: 'utf8' });
        logger.info("ASN 数据写入成功！");
    } catch (error) {
        logger.error('请求 ASN 数据失败:', error);
    }
}

// 运行保存最新 ASN 数据
namelist.forEach(async item => {
    await saveLatestASN(item);
});
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
