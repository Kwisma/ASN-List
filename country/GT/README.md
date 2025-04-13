
# ASN-List

实时更新 GT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GT/ASN.GT.yaml"
    path: ./ruleset/ASN.GT.yaml
    interval: 86400
    format: yaml
</code></pre>