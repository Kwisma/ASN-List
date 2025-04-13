
# ASN-List

实时更新 IO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IO/ASN.IO.yaml"
    path: ./ruleset/ASN.IO.yaml
    interval: 86400
    format: yaml
</code></pre>