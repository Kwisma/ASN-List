
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