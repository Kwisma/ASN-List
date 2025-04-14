
# ASN-List

实时更新 EU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNEU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/EU/ASN.EU.yaml"
    path: ./ruleset/ASN.EU.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNEU:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EU/ASN.EU.yaml"
    path: ./ruleset/ASN.EU.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  EUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EU/CIDR.EU.yaml"
    path: ./ruleset/EUcidr.yaml
</code></pre>