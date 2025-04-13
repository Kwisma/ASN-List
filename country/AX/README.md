
# ASN-List

实时更新 AX 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAX:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AX/ASN.AX.yaml"
    path: ./ruleset/ASN.AX.yaml
    interval: 86400
    format: yaml
</code></pre>