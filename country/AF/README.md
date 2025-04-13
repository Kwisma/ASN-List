
# ASN-List

实时更新 AF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AF/ASN.AF.yaml"
    path: ./ruleset/ASN.AF.yaml
    interval: 86400
    format: yaml
</code></pre>