
# ASN-List

实时更新 CN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CN/ASN.CN.yaml"
    path: ./ruleset/ASN.CN.yaml
    interval: 86400
    format: yaml
</code></pre>