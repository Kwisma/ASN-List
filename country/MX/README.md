
# ASN-List

实时更新 MX 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMX:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MX/ASN.MX.yaml"
    path: ./ruleset/ASN.MX.yaml
    interval: 86400
    format: yaml
</code></pre>