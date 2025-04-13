
# ASN-List

实时更新 QA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNQA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/QA/ASN.QA.yaml"
    path: ./ruleset/ASN.QA.yaml
    interval: 86400
    format: yaml
</code></pre>