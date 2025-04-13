
# ASN-List

实时更新 MV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMV:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MV/ASN.MV.yaml"
    path: ./ruleset/ASN.MV.yaml
    interval: 86400
    format: yaml
</code></pre>