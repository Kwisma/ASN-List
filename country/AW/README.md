
# ASN-List

实时更新 AW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AW/ASN.AW.yaml"
    path: ./ruleset/ASN.AW.yaml
    interval: 86400
    format: yaml
</code></pre>