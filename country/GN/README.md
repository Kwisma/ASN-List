
# ASN-List

实时更新 GN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GN/ASN.GN.yaml"
    path: ./ruleset/ASN.GN.yaml
    interval: 86400
    format: yaml
</code></pre>