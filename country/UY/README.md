
# ASN-List

实时更新 UY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNUY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UY/ASN.UY.yaml"
    path: ./ruleset/ASN.UY.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNUY:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UY/ASN.UY.yaml"
    path: ./ruleset/ASN.UY.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UY/CIDR.UY.yaml"
    path: ./ruleset/UYcidr.yaml
</code></pre>