
# ASN-List

实时更新 BB 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBB:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BB/ASN.BB.yaml"
    path: ./ruleset/ASN.BB.yaml
    interval: 86400
    format: yaml
</code></pre>