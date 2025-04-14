
# ASN-List

实时更新 LY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LY/ASN.LY.yaml"
    path: ./ruleset/ASN.LY.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLY:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LY/ASN.LY.yaml"
    path: ./ruleset/ASN.LY.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LY/CIDR.LY.yaml"
    path: ./ruleset/LYcidr.yaml
</code></pre>