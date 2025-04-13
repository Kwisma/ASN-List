
# ASN-List

实时更新 JO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNJO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/JO/ASN.JO.yaml"
    path: ./ruleset/ASN.JO.yaml
    interval: 86400
    format: yaml
</code></pre>