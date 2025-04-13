
# ASN-List

实时更新 UG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNUG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UG/ASN.UG.yaml"
    path: ./ruleset/ASN.UG.yaml
    interval: 86400
    format: yaml
</code></pre>