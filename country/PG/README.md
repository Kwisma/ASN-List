
# ASN-List

实时更新 PG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PG/ASN.PG.yaml"
    path: ./ruleset/ASN.PG.yaml
    interval: 86400
    format: yaml
</code></pre>