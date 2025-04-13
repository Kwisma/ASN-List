
# ASN-List

实时更新 KZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KZ/ASN.KZ.yaml"
    path: ./ruleset/ASN.KZ.yaml
    interval: 86400
    format: yaml
</code></pre>