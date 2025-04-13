
# ASN-List

实时更新 TW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TW/ASN.TW.yaml"
    path: ./ruleset/ASN.TW.yaml
    interval: 86400
    format: yaml
</code></pre>