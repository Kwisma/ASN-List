
# ASN-List

实时更新 SG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SG/ASN.SG.yaml"
    path: ./ruleset/ASN.SG.yaml
    interval: 86400
    format: yaml
</code></pre>