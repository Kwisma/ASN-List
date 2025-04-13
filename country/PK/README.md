
# ASN-List

实时更新 PK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PK/ASN.PK.yaml"
    path: ./ruleset/ASN.PK.yaml
    interval: 86400
    format: yaml
</code></pre>