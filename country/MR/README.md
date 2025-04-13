
# ASN-List

实时更新 MR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MR/ASN.MR.yaml"
    path: ./ruleset/ASN.MR.yaml
    interval: 86400
    format: yaml
</code></pre>