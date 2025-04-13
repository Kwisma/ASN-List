
# ASN-List

实时更新 TZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TZ/ASN.TZ.yaml"
    path: ./ruleset/ASN.TZ.yaml
    interval: 86400
    format: yaml
</code></pre>