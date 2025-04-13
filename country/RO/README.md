
# ASN-List

实时更新 RO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNRO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RO/ASN.RO.yaml"
    path: ./ruleset/ASN.RO.yaml
    interval: 86400
    format: yaml
</code></pre>