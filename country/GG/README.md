
# ASN-List

实时更新 GG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GG/ASN.GG.yaml"
    path: ./ruleset/ASN.GG.yaml
    interval: 86400
    format: yaml
</code></pre>