
# ASN-List

实时更新 MN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MN/ASN.MN.yaml"
    path: ./ruleset/ASN.MN.yaml
    interval: 86400
    format: yaml
</code></pre>