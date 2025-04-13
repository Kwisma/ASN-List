
# ASN-List

实时更新 TD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTD:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TD/ASN.TD.yaml"
    path: ./ruleset/ASN.TD.yaml
    interval: 86400
    format: yaml
</code></pre>