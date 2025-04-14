
# ASN-List

实时更新 SO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SO/ASN.SO.yaml"
    path: ./ruleset/ASN.SO.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSO:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SO/ASN.SO.yaml"
    path: ./ruleset/ASN.SO.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SO/CIDR.SO.yaml"
    path: ./ruleset/SOcidr.yaml
</code></pre>