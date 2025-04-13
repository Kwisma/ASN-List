
# ASN-List

实时更新 TC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTC:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TC/ASN.TC.yaml"
    path: ./ruleset/ASN.TC.yaml
    interval: 86400
    format: yaml
</code></pre>