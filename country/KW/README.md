
# ASN-List

实时更新 KW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KW/ASN.KW.yaml"
    path: ./ruleset/ASN.KW.yaml
    interval: 86400
    format: yaml
</code></pre>