
# ASN-List

实时更新 GR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GR/ASN.GR.yaml"
    path: ./ruleset/ASN.GR.yaml
    interval: 86400
    format: yaml
</code></pre>