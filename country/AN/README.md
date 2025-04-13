
# ASN-List

实时更新 AN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AN/ASN.AN.yaml"
    path: ./ruleset/ASN.AN.yaml
    interval: 86400
    format: yaml
</code></pre>