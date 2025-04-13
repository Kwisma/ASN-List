
# ASN-List

实时更新 TV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTV:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TV/ASN.TV.yaml"
    path: ./ruleset/ASN.TV.yaml
    interval: 86400
    format: yaml
</code></pre>