
# ASN-List

实时更新 RU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNRU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RU/ASN.RU.yaml"
    path: ./ruleset/ASN.RU.yaml
    interval: 86400
    format: yaml
</code></pre>