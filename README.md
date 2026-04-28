# ASN-List

实时更新的 ASN 和 IP 数据库。
data 目录ASN如下：

- ASN-Tencent

## 特征

- 每日自动更新
- 可靠且准确的来源

## 在代理应用中使用

## mihomo规则

<pre><code class="language-javascript">
rules:
  - RULE-SET,ASNTencent,Proxy

</code></pre>

## 常规配置

<pre><code class="language-javascript">
rule-providers:

  Tencentasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tencent/Tencent_ASN.yaml"
    path: ./ruleset/Tencent_ASN.yaml
    interval: 86400
    format: yaml

</code></pre>

## 高级配置ASN

<pre><code class="language-javascript">
rule-providers:

  Tencentasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tencent/Tencent_ASN.yaml"
    path: ./ruleset/Tencent_ASN.yaml

</code></pre>

## 高级配置CIDR

<pre><code class="language-javascript">
rule-providers:

  Tencentcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tencent/Tencent_IP.yaml"
    path: ./ruleset/Tencent_IP.yaml

</code></pre>