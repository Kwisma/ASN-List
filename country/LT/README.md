
# ASN-List

实时更新 LT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LT/ASN.LT.yaml"
    path: ./ruleset/ASN.LT.yaml
    interval: 86400
    format: yaml
</code></pre>