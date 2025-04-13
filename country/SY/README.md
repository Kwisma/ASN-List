
# ASN-List

实时更新 SY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SY/ASN.SY.yaml"
    path: ./ruleset/ASN.SY.yaml
    interval: 86400
    format: yaml
</code></pre>