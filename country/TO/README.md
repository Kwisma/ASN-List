
# ASN-List

实时更新 TO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TO/ASN.TO.yaml"
    path: ./ruleset/ASN.TO.yaml
    interval: 86400
    format: yaml
</code></pre>