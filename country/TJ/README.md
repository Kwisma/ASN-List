
# ASN-List

实时更新 TJ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTJ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TJ/ASN.TJ.yaml"
    path: ./ruleset/ASN.TJ.yaml
    interval: 86400
    format: yaml
</code></pre>