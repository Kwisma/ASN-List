
# ASN-List

实时更新 SL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSL:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SL/ASN.SL.yaml"
    path: ./ruleset/ASN.SL.yaml
    interval: 86400
    format: yaml
</code></pre>