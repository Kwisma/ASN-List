
# ASN-List

实时更新 CY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CY/ASN.CY.yaml"
    path: ./ruleset/ASN.CY.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCY:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CY/ASN.CY.yaml"
    path: ./ruleset/ASN.CY.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CY/CIDR.CY.yaml"
    path: ./ruleset/CYcidr.yaml
</code></pre>