
# ASN-List

实时更新 MA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MA/ASN.MA.yaml"
    path: ./ruleset/ASN.MA.yaml
    interval: 86400
    format: yaml
</code></pre>