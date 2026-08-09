# ASN-List

实时更新的 ASN 和 IP 数据库。
country 目录ASN如下：

- ASN-US United States
- ASN-BR Brazil
- ASN-CN China
- ASN-RU Russian Federation
- ASN-IN India

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

## mihomo规则

<pre><code class="language-javascript">
rules:
  - RULE-SET,ASNUS,Proxy
  - RULE-SET,ASNBR,Proxy
  - RULE-SET,ASNCN,Proxy
  - RULE-SET,ASNRU,Proxy
  - RULE-SET,ASNIN,Proxy

</code></pre>

## 常规配置

<pre><code class="language-javascript">
rule-providers:

  USasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/US/US_ASN.yaml"
    path: ./ruleset/US_ASN.yaml
    interval: 86400
    format: yaml

  BRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BR/BR_ASN.yaml"
    path: ./ruleset/BR_ASN.yaml
    interval: 86400
    format: yaml

  CNasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CN/CN_ASN.yaml"
    path: ./ruleset/CN_ASN.yaml
    interval: 86400
    format: yaml

  RUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RU/RU_ASN.yaml"
    path: ./ruleset/RU_ASN.yaml
    interval: 86400
    format: yaml

  INasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IN/IN_ASN.yaml"
    path: ./ruleset/IN_ASN.yaml
    interval: 86400
    format: yaml

</code></pre>

## 高级配置ASN

<pre><code class="language-javascript">
rule-providers:

  USasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/US/US_ASN.yaml"
    path: ./ruleset/US_ASN.yaml

  BRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BR/BR_ASN.yaml"
    path: ./ruleset/BR_ASN.yaml

  CNasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CN/CN_ASN.yaml"
    path: ./ruleset/CN_ASN.yaml

  RUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RU/RU_ASN.yaml"
    path: ./ruleset/RU_ASN.yaml

  INasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IN/IN_ASN.yaml"
    path: ./ruleset/IN_ASN.yaml

</code></pre>

## 高级配置CIDR

<pre><code class="language-javascript">
rule-providers:

  UScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/US/US_IP.yaml"
    path: ./ruleset/US_IP.yaml

  BRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BR/BR_IP.yaml"
    path: ./ruleset/BR_IP.yaml

  CNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CN/CN_IP.yaml"
    path: ./ruleset/CN_IP.yaml

  RUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RU/RU_IP.yaml"
    path: ./ruleset/RU_IP.yaml

  INcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IN/IN_IP.yaml"
    path: ./ruleset/IN_IP.yaml

</code></pre>