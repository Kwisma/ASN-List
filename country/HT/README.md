
# ASN-List

实时更新 HT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNHT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HT/ASN.HT.yaml"
    path: ./ruleset/ASN.HT.yaml
    interval: 86400
    format: yaml
</code></pre>