
# ASN-List

实时更新 FJ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFJ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FJ/ASN.FJ.yaml"
    path: ./ruleset/ASN.FJ.yaml
    interval: 86400
    format: yaml
</code></pre>