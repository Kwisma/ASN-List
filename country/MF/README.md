
# ASN-List

实时更新 MF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MF/ASN.MF.yaml"
    path: ./ruleset/ASN.MF.yaml
    interval: 86400
    format: yaml
</code></pre>