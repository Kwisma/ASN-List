
# ASN-List

实时更新 TT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TT/ASN.TT.yaml"
    path: ./ruleset/ASN.TT.yaml
    interval: 86400
    format: yaml
</code></pre>