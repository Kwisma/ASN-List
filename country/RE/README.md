
# ASN-List

实时更新 RE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNRE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RE/ASN.RE.yaml"
    path: ./ruleset/ASN.RE.yaml
    interval: 86400
    format: yaml
</code></pre>