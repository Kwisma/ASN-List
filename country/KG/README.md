
# ASN-List

实时更新 KG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KG/ASN.KG.yaml"
    path: ./ruleset/ASN.KG.yaml
    interval: 86400
    format: yaml
</code></pre>