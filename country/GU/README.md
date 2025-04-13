
# ASN-List

实时更新 GU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GU/ASN.GU.yaml"
    path: ./ruleset/ASN.GU.yaml
    interval: 86400
    format: yaml
</code></pre>