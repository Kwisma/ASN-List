
# ASN-List

实时更新 BQ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBQ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BQ/ASN.BQ.yaml"
    path: ./ruleset/ASN.BQ.yaml
    interval: 86400
    format: yaml
</code></pre>