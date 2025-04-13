
# ASN-List

实时更新 NE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NE/ASN.NE.yaml"
    path: ./ruleset/ASN.NE.yaml
    interval: 86400
    format: yaml
</code></pre>