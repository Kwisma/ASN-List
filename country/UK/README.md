
# ASN-List

实时更新 UK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNUK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UK/ASN.UK.yaml"
    path: ./ruleset/ASN.UK.yaml
    interval: 86400
    format: yaml
</code></pre>