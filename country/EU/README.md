
# ASN-List

实时更新 EU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  EUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/EU/EU_ASN.yaml"
    path: ./ruleset/EU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  EUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EU/EU_ASN.yaml"
    path: ./ruleset/EU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  EUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EU/EU_IP.yaml"
    path: ./ruleset/EU_IP.yaml
</code></pre>