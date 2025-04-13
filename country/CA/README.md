
# ASN-List

实时更新 CA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CA/ASN.CA.yaml"
    path: ./ruleset/ASN.CA.yaml
    interval: 86400
    format: yaml
</code></pre>