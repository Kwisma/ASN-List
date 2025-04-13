
# ASN-List

实时更新 BR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BR/ASN.BR.yaml"
    path: ./ruleset/ASN.BR.yaml
    interval: 86400
    format: yaml
</code></pre>