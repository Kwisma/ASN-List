
# ASN-List

实时更新 LB 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLB:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LB/ASN.LB.yaml"
    path: ./ruleset/ASN.LB.yaml
    interval: 86400
    format: yaml
</code></pre>