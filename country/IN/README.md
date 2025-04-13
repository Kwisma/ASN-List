
# ASN-List

实时更新 IN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IN/ASN.IN.yaml"
    path: ./ruleset/ASN.IN.yaml
    interval: 86400
    format: yaml
</code></pre>