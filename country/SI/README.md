
# ASN-List

实时更新 SI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SI/ASN.SI.yaml"
    path: ./ruleset/ASN.SI.yaml
    interval: 86400
    format: yaml
</code></pre>