
# ASN-List

实时更新 SS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SS/ASN.SS.yaml"
    path: ./ruleset/ASN.SS.yaml
    interval: 86400
    format: yaml
</code></pre>