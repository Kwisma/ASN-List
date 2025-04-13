
# ASN-List

实时更新 KY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KY/ASN.KY.yaml"
    path: ./ruleset/ASN.KY.yaml
    interval: 86400
    format: yaml
</code></pre>