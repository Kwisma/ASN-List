
# ASN-List

实时更新 AU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AU/ASN.AU.yaml"
    path: ./ruleset/ASN.AU.yaml
    interval: 86400
    format: yaml
</code></pre>