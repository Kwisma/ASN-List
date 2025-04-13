
# ASN-List

实时更新 CU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CU/ASN.CU.yaml"
    path: ./ruleset/ASN.CU.yaml
    interval: 86400
    format: yaml
</code></pre>