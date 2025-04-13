
# ASN-List

实时更新 PS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PS/ASN.PS.yaml"
    path: ./ruleset/ASN.PS.yaml
    interval: 86400
    format: yaml
</code></pre>