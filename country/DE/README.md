
# ASN-List

实时更新 DE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNDE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DE/ASN.DE.yaml"
    path: ./ruleset/ASN.DE.yaml
    interval: 86400
    format: yaml
</code></pre>