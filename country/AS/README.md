
# ASN-List

实时更新 AS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AS/ASN.AS.yaml"
    path: ./ruleset/ASN.AS.yaml
    interval: 86400
    format: yaml
</code></pre>