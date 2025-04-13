
# ASN-List

实时更新 TG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TG/ASN.TG.yaml"
    path: ./ruleset/ASN.TG.yaml
    interval: 86400
    format: yaml
</code></pre>