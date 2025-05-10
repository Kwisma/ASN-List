import axios from "axios";
import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import winston from "winston";
import yaml from "js-yaml";
import readline from "readline";

const csvFiles = [
  "./Geo/GeoLite2-ASN-Blocks-IPv4.csv",
  "./Geo/GeoLite2-ASN-Blocks-IPv6.csv",
];

const config = yaml.load(fs.readFileSync("./config/config.yaml", "utf8"));
const namelistData = config.namelist;
const countryList = config.country;
const cdn = config.cdn;
const scanning = true;
const scanningCountry = true;
const asnMap = new Map();
// country 目录
const nameASN = [];
const ruleput = [];
const rulenumset = [];
const rulenumsetcidr = [];
const ruleset = [];
// data 目录
const nameASNdata = [];
const ruleputdata = [];
const rulenumsetdata = [];
const rulenumsetdatacidr = [];
const rulesetdata = [];

function formatTimestamp() {
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: formatTimestamp }),
        winston.format.printf(
          ({ timestamp, level, message }) =>
            `${timestamp} [${level}] ${message}`,
        ),
      ),
    }),
  ],
});

// 加载 ASN → CIDR 映射
const asnToCIDR = await ASNCIDRMAP(csvFiles);
async function parseCSV(filePath) {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let isFirstLine = true;
  for await (const line of rl) {
    if (isFirstLine) {
      isFirstLine = false;
      continue; // 跳过表头
    }
    const [network, asnRaw] = line.split(",");
    const asn = parseInt(asnRaw);
    if (!isNaN(asn)) {
      const cidr = network.replace(/"/g, "");
      if (!asnMap.has(asn)) {
        asnMap.set(asn, []);
      }
      asnMap.get(asn).push(cidr);
    }
  }
}

async function ASNCIDRMAP(csvFiles) {
  for (const file of csvFiles) {
    await parseCSV(file);
  }
  return Object.fromEntries(asnMap);
}

function getChinaTime() {
  const options = {
    timeZone: "Asia/Shanghai",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Intl.DateTimeFormat("zh-CN", options)
    .format(new Date())
    .replace(/\//g, "-");
}

function getFilePaths(name, directory) {
  const base = `./${directory}/${name}`;
  return {
    asnList: `${base}/${name}_ASN.list`,
    asnResolveList: `${base}/${name}_ASN_No_Resolve.list`,
    asnYaml: `${base}/${name}_ASN.yaml`,
    asnResolveYaml: `${base}/${name}_ASN_No_Resolve.yaml`,
    cidrList: `${base}/${name}_IP.list`,
    cidrYaml: `${base}/${name}_IP.yaml`,
    readme: `${base}/README.md`,
  };
}

function initFile(name, directory = "country") {
  const localTime = getChinaTime();
  const header = `# ${name} 的 ASN 信息\n# 最后更新： CST ${localTime}\n`;
  const filemd = `\n# ASN-List\n\n实时更新 ${name} 的 ASN 和 IP 数据库。\n\n<pre><code class="language-javascript">\nrule-providers:\n  ${name}asn:\n    type: http\n    behavior: classical\n    url: \"https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/${directory}/${name}/${name}_ASN.yaml\"\n    path: ./ruleset/${name}_ASN.yaml\n    interval: 86400\n    format: yaml\n</code></pre>\n\n<pre><code class="language-javascript">\nrule-providers:\n  ${name}asn:\n    <<: *classical\n    url: \"https://${cdn}/gh/Kwisma/ASN-List@main/${directory}/${name}/${name}_ASN.yaml\"\n    path: ./ruleset/${name}_ASN.yaml\n</code></pre>\n\n<pre><code class="language-javascript">\nrule-providers:\n  ${name}cidr:\n    <<: *ipcidr\n    url: \"https://${cdn}/gh/Kwisma/ASN-List@main/${directory}/${name}/${name}_IP.yaml\"\n    path: ./ruleset/${name}_IP.yaml\n</code></pre>`;

  const dir = path.join("./", directory, name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const files = getFilePaths(name, directory);
  [files.asnList, files.asnResolveList, files.asnYaml, files.asnResolveYaml, files.cidrList, files.cidrYaml].forEach(
    (file) => fs.writeFileSync(file, header, "utf8"),
  );
  fs.writeFileSync(files.readme, filemd, "utf8");
}

function asnInfo(name, asnNumber, directory = "country") {
  const fileasn = `# ASN: ${asnNumber}\n# 由 Kwisma 制作，保留所有权利。\n\n`;
  const files = getFilePaths(name, directory);
  [files.asnList, files.asnResolveList, files.asnYaml, files.asnResolveYaml, files.cidrList, files.cidrYaml].forEach(
    (file) => fs.appendFileSync(file, fileasn, "utf8"),
  );
  [files.asnYaml, files.asnResolveYaml, files.cidrYaml].forEach(
    (file) => fs.appendFileSync(file, `payload:\n`, "utf8"),
  );
}

async function fetchWithRetry(url, options, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await axios.get(url, options);
    } catch (error) {
      if (i === retries - 1) throw error;
      logger.warn(`请求失败，重试 ${i + 1}/${retries}...`);
    }
  }
}

function getFullName(name) {
  const entry = payload().find((item) => item.name === name);
  return entry ? entry.nametry : null;
}

async function saveLatestASN(name, directory = "country") {
  const url =
    directory === "data"
      ? `https://bgp.he.net/search?search[search]=${name}`
      : `https://bgp.he.net/country/${name}`;

  initFile(name, directory);
  try {
    logger.info(`开始请求 ASN 数据 (${name} in ${directory})...`);
    const { data } = await fetchWithRetry(url, {});
    const $ = cheerio.load(data);
    const asns =
      directory === "data" ? $("table.w100p tbody tr") : $("#asns tbody tr");

    const asnEntries = Array.from(asns).filter((asn) => {
      const asnText = $(asn).find("td:nth-child(1) a").text().trim();
      return /^AS\d+/.test(asnText);
    });
    logger.info(`共找到 ${asnEntries.length} 个 ASN 条目，开始写入文件...`);
    asnInfo(name, asnEntries.length, directory);
    const files = getFilePaths(name, directory);
    if (directory === "data") {
      rulesetdata.push(`  - RULE-SET,ASN${name},Proxy\n`);
      ruleputdata.push(
        `\n  ${name}asn:\n    type: http\n    behavior: classical\n    url: \"https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/${directory}/${name}/${name}_ASN.yaml\"\n    path: ./ruleset/${name}_ASN.yaml\n    interval: 86400\n    format: yaml\n`,
      );
      rulenumsetdata.push(
        `\n  ${name}asn:\n    <<: *classical\n    url: \"https://${cdn}/gh/Kwisma/ASN-List@main/${directory}/${name}/${name}_ASN.yaml\"\n    path: ./ruleset/${name}_ASN.yaml\n`,
      );
      rulenumsetdatacidr.push(
        `\n  ${name}cidr:\n    <<: *ipcidr\n    url: \"https://${cdn}/gh/Kwisma/ASN-List@main/${directory}/${name}/${name}_IP.yaml\"\n    path: ./ruleset/${name}_IP.yaml\n`,
      );
      nameASNdata.push(name);
      for (let asn of asns) {
        const asnNumber = $(asn)
          .find("td:nth-child(1) a")
          .text()
          .replace("AS", "")
          .trim();
        const asnName = $(asn).find("td:nth-child(2)").text().trim();
        if (asnName === "ASN") {
          fs.appendFileSync(
            files.asnList,
            `IP-ASN,${asnNumber},no-resolve\n`,
            "utf8",
          );
          fs.appendFileSync(
            files.asnResolveList,
            `IP-ASN,${asnNumber}\n`,
            "utf8",
          );
          fs.appendFileSync(
            files.asnYaml,
            `  - IP-ASN,${asnNumber},no-resolve\n`,
            "utf8",
          );
          fs.appendFileSync(
            files.asnResolveYaml,
            `  - IP-ASN,${asnNumber}\n`,
            "utf8",
          );
          logger.info(`已写入 ASN (${asnNumber})`);
          if (scanning) {
            const cidrList = asnToCIDR[asnNumber];
            if (cidrList) {
              cidrList.forEach((cidr) => {
                fs.appendFileSync(files.cidrList, `${cidr}\n`, "utf8");
                fs.appendFileSync(files.cidrYaml, `  - ${cidr}\n`, "utf8");
              });
              logger.info(`已写入 ${cidrList.length} 个 CIDR (${asnNumber})`);
            }
          }
        }
      }
    } else {
      ruleset.push(`  - RULE-SET,ASN${name},Proxy\n`);
      ruleput.push(
        `\n  ${name}asn:\n    type: http\n    behavior: classical\n    url: \"https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/${directory}/${name}/${name}_ASN.yaml\"\n    path: ./ruleset/${name}_ASN.yaml\n    interval: 86400\n    format: yaml\n`,
      );
      rulenumset.push(
        `\n  ${name}asn:\n    <<: *classical\n    url: \"https://${cdn}/gh/Kwisma/ASN-List@main/${directory}/${name}/${name}_ASN.yaml\"\n    path: ./ruleset/${name}_ASN.yaml\n`,
      );
      rulenumsetcidr.push(
        `\n  ${name}cidr:\n    <<: *ipcidr\n    url: \"https://${cdn}/gh/Kwisma/ASN-List@main/${directory}/${name}/${name}_IP.yaml\"\n    path: ./ruleset/${name}_IP.yaml\n`,
      );
      nameASN.push(name + " " + getFullName(name));
      for (let asn of asns) {
        const asnNumber = $(asn)
          .find("td:nth-child(1) a")
          .text()
          .replace("AS", "")
          .trim();
        if (asnNumber) {
          fs.appendFileSync(
            files.asnList,
            `IP-ASN,${asnNumber},no-resolve\n`,
            "utf8",
          );
          fs.appendFileSync(
            files.asnResolveList,
            `IP-ASN,${asnNumber}\n`,
            "utf8",
          );
          fs.appendFileSync(
            files.asnYaml,
            `  - IP-ASN,${asnNumber},no-resolve\n`,
            "utf8",
          );
          fs.appendFileSync(
            files.asnResolveYaml,
            `  - IP-ASN,${asnNumber}\n`,
            "utf8",
          );

          if (scanningCountry) {
            const cidrList = asnToCIDR[asnNumber];
            if (cidrList) {
              cidrList.forEach((cidr) => {
                fs.appendFileSync(files.cidrList, `${cidr}\n`, "utf8");
                fs.appendFileSync(files.cidrYaml, `  - ${cidr}\n`, "utf8");
              });
              logger.info(`已写入 ${cidrList.length} 个 CIDR (${asnNumber})`);
            }
          }
        }
      }
    }
    logger.info(`ASN 数据写入完成 (${name} in ${directory})`);
  } catch (error) {
    logger.error(`处理失败 (${name} in ${directory}):`, error);
  }
}

async function saveWithDelay() {
  for (let i = 0; i < namelistData.length; i++) {
    await saveLatestASN(namelistData[i], "data");
  }
  const ASNListItemsdata = nameASNdata
    .map((name) => `- ASN-${name}`)
    .join("\n");
  const data = `# ASN-List\n\n实时更新的 ASN 和 IP 数据库。\ndata 目录ASN如下：\n\n${ASNListItemsdata}\n\n## 特征\n\n- 每日自动更新\n- 可靠且准确的来源\n\n## 在代理应用中使用\n\n## mihomo规则\n\n<pre><code class="language-javascript">\nrules:\n${rulesetdata.map((item) => item.toString()).join("")}\n</code></pre>\n\n## 常规配置\n\n<pre><code class="language-javascript">\nrule-providers:\n${ruleputdata.map((item) => item.toString()).join("")}\n</code></pre>\n\n## 高级配置ASN\n\n<pre><code class="language-javascript">\nrule-providers:\n${rulenumsetdata.map((item) => item.toString()).join("")}\n</code></pre>\n\n## 高级配置CIDR\n\n<pre><code class="language-javascript">\nrule-providers:\n${rulenumsetdatacidr.map((item) => item.toString()).join("")}\n</code></pre>`;
  fs.writeFileSync(`README.md`, data, { encoding: "utf8" });
  for (let i = 0; i < countryList.length; i++) {
    await saveLatestASN(countryList[i], "country");
  }
  const ASNListItems = nameASN.map((name) => `- ASN-${name}`).join("\n");
  const datamd = `# ASN-List\n\n实时更新的 ASN 和 IP 数据库。\ncountry 目录ASN如下：\n\n${ASNListItems}\n\n## 特征\n\n- 每日自动更新\n- 可靠且准确的来源\n\n## 在代理应用中使用\n\n## mihomo规则\n\n<pre><code class="language-javascript">\nrules:\n${ruleset.map((item) => item.toString()).join("")}\n</code></pre>\n\n## 常规配置\n\n<pre><code class="language-javascript">\nrule-providers:\n${ruleput.map((item) => item.toString()).join("")}\n</code></pre>\n\n## 高级配置ASN\n\n<pre><code class="language-javascript">\nrule-providers:\n${rulenumset.map((item) => item.toString()).join("")}\n</code></pre>\n\n## 高级配置CIDR\n\n<pre><code class="language-javascript">\nrule-providers:\n${rulenumsetcidr.map((item) => item.toString()).join("")}\n</code></pre>`;
  fs.writeFileSync(`README-ry.md`, datamd, { encoding: "utf8" });
}

saveWithDelay();

// 通用的 payload 数据结构，按需扩展
function payload() {
  return [
    {
      name: "US",
      nametry: "United States",
    },
    {
      name: "BR",
      nametry: "Brazil",
    },
    {
      name: "CN",
      nametry: "China",
    },
    {
      name: "RU",
      nametry: "Russian Federation",
    },
    {
      name: "IN",
      nametry: "India",
    },
    {
      name: "GB",
      nametry: "United Kingdom",
    },
    {
      name: "ID",
      nametry: "Indonesia",
    },
    {
      name: "DE",
      nametry: "Germany",
    },
    {
      name: "AU",
      nametry: "Australia",
    },
    {
      name: "PL",
      nametry: "Poland",
    },
    {
      name: "CA",
      nametry: "Canada",
    },
    {
      name: "UA",
      nametry: "Ukraine",
    },
    {
      name: "FR",
      nametry: "France",
    },
    {
      name: "BD",
      nametry: "Bangladesh",
    },
    {
      name: "NL",
      nametry: "Netherlands",
    },
    {
      name: "IT",
      nametry: "Italy",
    },
    {
      name: "HK",
      nametry: "Hong Kong",
    },
    {
      name: "RO",
      nametry: "Romania",
    },
    {
      name: "ES",
      nametry: "Spain",
    },
    {
      name: "AR",
      nametry: "Argentina",
    },
    {
      name: "JP",
      nametry: "Japan",
    },
    {
      name: "CH",
      nametry: "Switzerland",
    },
    {
      name: "KR",
      nametry: "Korea, Republic of",
    },
    {
      name: "TR",
      nametry: "Turkey",
    },
    {
      name: "SE",
      nametry: "Sweden",
    },
    {
      name: "VN",
      nametry: "Viet Nam",
    },
    {
      name: "ZA",
      nametry: "South Africa",
    },
    {
      name: "IR",
      nametry: "Iran, Islamic Republic of",
    },
    {
      name: "BG",
      nametry: "Bulgaria",
    },
    {
      name: "AT",
      nametry: "Austria",
    },
    {
      name: "NZ",
      nametry: "New Zealand",
    },
    {
      name: "MX",
      nametry: "Mexico",
    },
    {
      name: "CZ",
      nametry: "Czech Republic",
    },
    {
      name: "SG",
      nametry: "Singapore",
    },
    {
      name: "PH",
      nametry: "Philippines",
    },
    {
      name: "TH",
      nametry: "Thailand",
    },
    {
      name: "CO",
      nametry: "Colombia",
    },
    {
      name: "DK",
      nametry: "Denmark",
    },
    {
      name: "TW",
      nametry: "Taiwan",
    },
    {
      name: "NO",
      nametry: "Norway",
    },
    {
      name: "CL",
      nametry: "Chile",
    },
    {
      name: "BE",
      nametry: "Belgium",
    },
    {
      name: "FI",
      nametry: "Finland",
    },
    {
      name: "PK",
      nametry: "Pakistan",
    },
    {
      name: "IL",
      nametry: "Israel",
    },
    {
      name: "MY",
      nametry: "Malaysia",
    },
    {
      name: "EU",
      nametry: "European Union",
    },
    {
      name: "LV",
      nametry: "Latvia",
    },
    {
      name: "HU",
      nametry: "Hungary",
    },
    {
      name: "IE",
      nametry: "Ireland",
    },
    {
      name: "NG",
      nametry: "Nigeria",
    },
    {
      name: "SI",
      nametry: "Slovenia",
    },
    {
      name: "GR",
      nametry: "Greece",
    },
    {
      name: "EC",
      nametry: "Ecuador",
    },
    {
      name: "KE",
      nametry: "Kenya",
    },
    {
      name: "VE",
      nametry: "Venezuela, Bolivarian Republic of",
    },
    {
      name: "SK",
      nametry: "Slovakia",
    },
    {
      name: "LT",
      nametry: "Lithuania",
    },
    {
      name: "EE",
      nametry: "Estonia",
    },
    {
      name: "IQ",
      nametry: "Iraq",
    },
    {
      name: "PE",
      nametry: "Peru",
    },
    {
      name: "MD",
      nametry: "Moldova, Republic of",
    },
    {
      name: "KZ",
      nametry: "Kazakhstan",
    },
    {
      name: "RS",
      nametry: "Serbia",
    },
    {
      name: "SA",
      nametry: "Saudi Arabia",
    },
    {
      name: "NP",
      nametry: "Nepal",
    },
    {
      name: "HR",
      nametry: "Croatia",
    },
    {
      name: "DO",
      nametry: "Dominican Republic",
    },
    {
      name: "LB",
      nametry: "Lebanon",
    },
    {
      name: "CY",
      nametry: "Cyprus",
    },
    {
      name: "PT",
      nametry: "Portugal",
    },
    {
      name: "AE",
      nametry: "United Arab Emirates",
    },
    {
      name: "PA",
      nametry: "Panama",
    },
    {
      name: "MM",
      nametry: "Myanmar",
    },
    {
      name: "GE",
      nametry: "Georgia",
    },
    {
      name: "KH",
      nametry: "Cambodia",
    },
    {
      name: "BY",
      nametry: "Belarus",
    },
    {
      name: "LU",
      nametry: "Luxembourg",
    },
    {
      name: "AM",
      nametry: "Armenia",
    },
    {
      name: "GH",
      nametry: "Ghana",
    },
    {
      name: "AL",
      nametry: "Albania",
    },
    {
      name: "TZ",
      nametry: "Tanzania, United Republic of",
    },
    {
      name: "CR",
      nametry: "Costa Rica",
    },
    {
      name: "HN",
      nametry: "Honduras",
    },
    {
      name: "UZ",
      nametry: "Uzbekistan",
    },
    {
      name: "PR",
      nametry: "Puerto Rico",
    },
    {
      name: "EG",
      nametry: "Egypt",
    },
    {
      name: "PY",
      nametry: "Paraguay",
    },
    {
      name: "SC",
      nametry: "Seychelles",
    },
    {
      name: "IS",
      nametry: "Iceland",
    },
    {
      name: "AZ",
      nametry: "Azerbaijan",
    },
    {
      name: "GT",
      nametry: "Guatemala",
    },
    {
      name: "KW",
      nametry: "Kuwait",
    },
    {
      name: "AO",
      nametry: "Angola",
    },
    {
      name: "AF",
      nametry: "Afghanistan",
    },
    {
      name: "MN",
      nametry: "Mongolia",
    },
    {
      name: "PS",
      nametry: "Palestine",
    },
    {
      name: "UG",
      nametry: "Uganda",
    },
    {
      name: "KG",
      nametry: "Kyrgyzstan",
    },
    {
      name: "BO",
      nametry: "Bolivia, Plurinational State of",
    },
    {
      name: "MK",
      nametry: "Macedonia, The Former Yugoslav Republic of",
    },
    {
      name: "MU",
      nametry: "Mauritius",
    },
    {
      name: "MT",
      nametry: "Malta",
    },
    {
      name: "CD",
      nametry: "Congo, The Democratic Republic of the",
    },
    {
      name: "BA",
      nametry: "Bosnia and Herzegovina",
    },
    {
      name: "SV",
      nametry: "El Salvador",
    },
    {
      name: "JO",
      nametry: "Jordan",
    },
    {
      name: "VG",
      nametry: "Virgin Islands, British",
    },
    {
      name: "UY",
      nametry: "Uruguay",
    },
    {
      name: "PG",
      nametry: "Papua New Guinea",
    },
    {
      name: "LA",
      nametry: "Lao People's Democratic Republic",
    },
    {
      name: "BZ",
      nametry: "Belize",
    },
    {
      name: "ZW",
      nametry: "Zimbabwe",
    },
    {
      name: "MZ",
      nametry: "Mozambique",
    },
    {
      name: "CW",
      nametry: "Curaçao",
    },
    {
      name: "CM",
      nametry: "Cameroon",
    },
    {
      name: "MW",
      nametry: "Malawi",
    },
    {
      name: "BW",
      nametry: "Botswana",
    },
    {
      name: "RW",
      nametry: "Rwanda",
    },
    {
      name: "NI",
      nametry: "Nicaragua",
    },
    {
      name: "BT",
      nametry: "Bhutan",
    },
    {
      name: "TJ",
      nametry: "Tajikistan",
    },
    {
      name: "LY",
      nametry: "Libya",
    },
    {
      name: "GI",
      nametry: "Gibraltar",
    },
    {
      name: "BF",
      nametry: "Burkina Faso",
    },
    {
      name: "MA",
      nametry: "Morocco",
    },
    {
      name: "LK",
      nametry: "Sri Lanka",
    },
    {
      name: "ZM",
      nametry: "Zambia",
    },
    {
      name: "TN",
      nametry: "Tunisia",
    },
    {
      name: "CI",
      nametry: "Côte d'Ivoire",
    },
    {
      name: "ME",
      nametry: "Montenegro",
    },
    {
      name: "BH",
      nametry: "Bahrain",
    },
    {
      name: "LI",
      nametry: "Liechtenstein",
    },
    {
      name: "SS",
      nametry: "South Sudan",
    },
    {
      name: "IM",
      nametry: "Isle of Man",
    },
    {
      name: "SL",
      nametry: "Sierra Leone",
    },
    {
      name: "QA",
      nametry: "Qatar",
    },
    {
      name: "SO",
      nametry: "Somalia",
    },
    {
      name: "BM",
      nametry: "Bermuda",
    },
    {
      name: "BJ",
      nametry: "Benin",
    },
    {
      name: "OM",
      nametry: "Oman",
    },
    {
      name: "GN",
      nametry: "Guinea",
    },
    {
      name: "DZ",
      nametry: "Algeria",
    },
    {
      name: "CG",
      nametry: "Congo",
    },
    {
      name: "TD",
      nametry: "Chad",
    },
    {
      name: "SN",
      nametry: "Senegal",
    },
    {
      name: "NC",
      nametry: "New Caledonia",
    },
    {
      name: "NA",
      nametry: "Namibia",
    },
    {
      name: "GA",
      nametry: "Gabon",
    },
    {
      name: "FJ",
      nametry: "Fiji",
    },
    {
      name: "TT",
      nametry: "Trinidad and Tobago",
    },
    {
      name: "MV",
      nametry: "Maldives",
    },
    {
      name: "LR",
      nametry: "Liberia",
    },
    {
      name: "AG",
      nametry: "Antigua and Barbuda",
    },
    {
      name: "KY",
      nametry: "Cayman Islands",
    },
    {
      name: "SZ",
      nametry: "Swaziland",
    },
    {
      name: "MO",
      nametry: "Macao",
    },
    {
      name: "HT",
      nametry: "Haiti",
    },
    {
      name: "BS",
      nametry: "Bahamas",
    },
    {
      name: "VU",
      nametry: "Vanuatu",
    },
    {
      name: "TL",
      nametry: "Timor-Leste",
    },
    {
      name: "SD",
      nametry: "Sudan",
    },
    {
      name: "JM",
      nametry: "Jamaica",
    },
    {
      name: "VI",
      nametry: "Virgin Islands, U.S.",
    },
    {
      name: "SM",
      nametry: "San Marino",
    },
    {
      name: "MG",
      nametry: "Madagascar",
    },
    {
      name: "JE",
      nametry: "Jersey",
    },
    {
      name: "GM",
      nametry: "Gambia",
    },
    {
      name: "SB",
      nametry: "Solomon Islands",
    },
    {
      name: "ML",
      nametry: "Mali",
    },
    {
      name: "BI",
      nametry: "Burundi",
    },
    {
      name: "WS",
      nametry: "Samoa",
    },
    {
      name: "LS",
      nametry: "Lesotho",
    },
    {
      name: "GU",
      nametry: "Guam",
    },
    {
      name: "GG",
      nametry: "Guernsey",
    },
    {
      name: "GD",
      nametry: "Grenada",
    },
    {
      name: "CV",
      nametry: "Cape Verde",
    },
    {
      name: "TG",
      nametry: "Togo",
    },
    {
      name: "RE",
      nametry: "RÉUNION",
    },
    {
      name: "NE",
      nametry: "Niger",
    },
    {
      name: "FO",
      nametry: "Faroe Islands",
    },
    {
      name: "BN",
      nametry: "Brunei Darussalam",
    },
    {
      name: "BB",
      nametry: "Barbados",
    },
    {
      name: "MR",
      nametry: "Mauritania",
    },
    {
      name: "KN",
      nametry: "Saint Kitts and Nevis",
    },
    {
      name: "GP",
      nametry: "Guadeloupe",
    },
    {
      name: "ET",
      nametry: "Ethiopia",
    },
    {
      name: "SR",
      nametry: "Suriname",
    },
    {
      name: "LC",
      nametry: "Saint Lucia",
    },
    {
      name: "GQ",
      nametry: "Equatorial Guinea",
    },
    {
      name: "DM",
      nametry: "Dominica",
    },
    {
      name: "TM",
      nametry: "Turkmenistan",
    },
    {
      name: "SY",
      nametry: "Syrian Arab Republic",
    },
    {
      name: "MH",
      nametry: "Marshall Islands",
    },
    {
      name: "GY",
      nametry: "Guyana",
    },
    {
      name: "GF",
      nametry: "French Guiana",
    },
    {
      name: "CU",
      nametry: "Cuba",
    },
    {
      name: "YE",
      nametry: "Yemen",
    },
    {
      name: "PF",
      nametry: "French Polynesia",
    },
    {
      name: "MQ",
      nametry: "Martinique",
    },
    {
      name: "MF",
      nametry: "Saint Martin (French part)",
    },
    {
      name: "FM",
      nametry: "Micronesia, Federated States of",
    },
    {
      name: "DJ",
      nametry: "Djibouti",
    },
    {
      name: "BQ",
      nametry: "Bonaire, Sint Eustatius and Saba",
    },
    {
      name: "TO",
      nametry: "Tonga",
    },
    {
      name: "PW",
      nametry: "Palau",
    },
    {
      name: "NR",
      nametry: "Nauru",
    },
    {
      name: "AW",
      nametry: "Aruba",
    },
    {
      name: "AI",
      nametry: "Anguilla",
    },
    {
      name: "VC",
      nametry: "Saint Vincent and the Grenadines",
    },
    {
      name: "SX",
      nametry: "Sint Maarten (Dutch part)",
    },
    {
      name: "KI",
      nametry: "Kiribati",
    },
    {
      name: "CF",
      nametry: "Central African Republic",
    },
    {
      name: "BL",
      nametry: "Saint Barthélemy",
    },
    {
      name: "VA",
      nametry: "Holy See (Vatican City State)",
    },
    {
      name: "TV",
      nametry: "Tuvalu",
    },
    {
      name: "TK",
      nametry: "Tokelau",
    },
    {
      name: "MC",
      nametry: "Monaco",
    },
    {
      name: "AS",
      nametry: "American Samoa",
    },
    {
      name: "AD",
      nametry: "Andorra",
    },
    {
      name: "TC",
      nametry: "Turks and Caicos Islands",
    },
    {
      name: "ST",
      nametry: "Sao Tome and Principe",
    },
    {
      name: "NF",
      nametry: "Norfolk Island",
    },
    {
      name: "MP",
      nametry: "Northern Mariana Islands",
    },
    {
      name: "KM",
      nametry: "Comoros",
    },
    {
      name: "GW",
      nametry: "Guinea-Bissau",
    },
    {
      name: "FK",
      nametry: "Falkland Islands (Malvinas)",
    },
    {
      name: "CK",
      nametry: "Cook Islands",
    },
    {
      name: "AP",
      nametry: "",
    },
    {
      name: "YT",
      nametry: "Mayotte",
    },
    {
      name: "WF",
      nametry: "Wallis and Futuna",
    },
    {
      name: "UK",
      nametry: "United Kingdom",
    },
    {
      name: "PM",
      nametry: "Saint Pierre and Miquelon",
    },
    {
      name: "NU",
      nametry: "Niue",
    },
    {
      name: "MS",
      nametry: "Montserrat",
    },
    {
      name: "KP",
      nametry: "Korea, Democratic People's Republic of",
    },
    {
      name: "IO",
      nametry: "British Indian Ocean Territory",
    },
    {
      name: "GL",
      nametry: "Greenland",
    },
    {
      name: "ER",
      nametry: "Eritrea",
    },
    {
      name: "AX",
      nametry: "Åland Islands",
    },
    {
      name: "AN",
      nametry: "Netherlands Antilles",
    },
  ];
}
