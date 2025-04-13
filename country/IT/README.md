
# ASN-List

实时更新 IT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IT/ASN.IT.yaml"
    path: ./ruleset/ASN.IT.yaml
    interval: 86400
    format: yaml
</code></pre>