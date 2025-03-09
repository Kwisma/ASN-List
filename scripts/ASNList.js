import axios from 'axios';
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import winston from 'winston';
import yaml from 'js-yaml'

// 读取外部的 config.yaml 文件
const config = yaml.load(fs.readFileSync('./config/config.yaml', 'utf8'));
const namelist = config.namelist;

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

function initFile(name) {
    const localTime = getChinaTime();
    const header = `# ${name} 的 ASN 信息。 (https://github.com/Kwisma/ASN-List)\n`;
    const lastUpdated = `# 最后更新： CST ${localTime}\n`;
    const footer = "# 由 Kwisma 制作，保留所有权利。\n\n";
    const fileContent = header + lastUpdated + footer;
    const mdhr = `
# ASN-List

实时更新 ${name} 的 ASN 和 IP 数据库。

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

mihomo(clash.meta)

<pre><code class="language-javascript">
rule-providers:
  reject:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/${name}/ASN.${name}.yaml"
    path: ./ruleset/ASN.${name}.yaml
    interval: 86400
</code></pre>

Surge

<pre><code class="language-javascript">
[Rule]
# > ${name} ASN List
RULE-SET, https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/${name}/ASN.${name}.list, Direct
</code></pre>

Quantumult X

<pre><code class="language-javascript">
[filter_remote]
# ${name} ASN List
https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/${name}/ASN.${name}.list, tag=${name}ASN, force-policy=direct, update-interval=86400, opt-parser=true, enabled=true
</code></pre>
`;
    // 创建以 name 命名的文件夹，所有文件都保存到该目录下
    const dir = path.join('./', 'data', name);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const files = [`./data/${name}/ASN.${name}.list`, `./data/${name}/ASN.${name}.yaml`];
    const mdfiles = [`./data/${name}/README.md`];
    logger.info("初始化文件...");
    // 遍历文件列表并写入内容
    files.forEach((file) => {
        fs.writeFileSync(file, fileContent, { encoding: 'utf8' });
    });
    mdfiles.forEach((file) => {
        fs.writeFileSync(file, mdhr, { encoding: 'utf8' });
    });
    logger.info("文件初始化完成！");
}

async function saveLatestASN(name) {
    const url = `https://bgp.he.net/search?search[search]=${name}`;
    const headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    };

    initFile(name);

    try {
        logger.info("开始请求 ASN 数据...");
        const { data } = await axios.get(url, { headers });
        logger.info("数据请求成功！");
        const $ = cheerio.load(data);
        const asns = $('table.w100p tbody tr');
        logger.info(`共找到 ${asns.length} 个 ASN 条目，开始写入文件...`);
        let payload = [];

        asns.each((index, asn) => {
            const asnNumber = $(asn).find('td:nth-child(1) a').text().replace('AS', '').trim();
            const asnName = $(asn).find('td:nth-child(2)').text().trim();
            if (asnName === 'ASN') {
                const asnInfo = `IP-ASN,${asnNumber} # ${asnName}\n`;
                payload.push(`IP-ASN,${asnNumber} # ${asnName}`);
                fs.appendFileSync(`./data/${name}/ASN.${name}.list`, asnInfo, { encoding: 'utf8' });
                logger.info(`处理 ASN #${index + 1}: ${asnNumber} # ${asnName}`);
            }
            if (asnName === 'Route') {
                if (!asnNumber.includes(':')) {
                    const asnInfo = `IP-CIDR,${asnNumber} # ${asnName}\n`;
                    payload.push(`IP-CIDR,${asnNumber} # ${asnName}`);
                    fs.appendFileSync(`./data/${name}/ASN.${name}.list`, asnInfo, { encoding: 'utf8' });
                    logger.info(`处理 ASN #${index + 1}: ${asnNumber} # ${asnName}`);
                } else {
                    const asnInfo = `IP-CIDR6,${asnNumber} # ${asnName}\n`;
                    payload.push(`IP-CIDR6,${asnNumber} # ${asnName}`);
                    fs.appendFileSync(`./data/${name}/ASN.${name}.list`, asnInfo, { encoding: 'utf8' });
                    logger.info(`处理 ASN #${index + 1}: ${asnNumber} # ${asnName}`);
                }
            }
        });
        const output = {
            payload: payload
        };
        let yamlString = yaml.dump(output, { lineWidth: -1 });
        yamlString = yamlString.replace(/'/g, '');
        fs.appendFileSync(`./data/${name}/ASN.${name}.yaml`, yamlString, { encoding: 'utf8' });
        logger.info("ASN 数据写入成功！");
    } catch (error) {
        logger.error('请求 ASN 数据失败:', error);
    }
}

// 运行保存最新 ASN 数据
namelist.forEach(item => {
    logger.info(`开始序号：${item}`)
    saveLatestASN(item);
});