
# ASN-List

实时更新 VI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNVI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VI/ASN.VI.yaml"
    path: ./ruleset/ASN.VI.yaml
    interval: 86400
    format: yaml
</code></pre>