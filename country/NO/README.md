
# ASN-List

实时更新 NO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NO/ASN.NO.yaml"
    path: ./ruleset/ASN.NO.yaml
    interval: 86400
    format: yaml
</code></pre>