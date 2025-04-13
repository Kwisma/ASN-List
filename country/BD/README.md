
# ASN-List

实时更新 BD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBD:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BD/ASN.BD.yaml"
    path: ./ruleset/ASN.BD.yaml
    interval: 86400
    format: yaml
</code></pre>