
# ASN-List

实时更新 KE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KE/ASN.KE.yaml"
    path: ./ruleset/ASN.KE.yaml
    interval: 86400
    format: yaml
</code></pre>