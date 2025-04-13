
# ASN-List

实时更新 RW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNRW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RW/ASN.RW.yaml"
    path: ./ruleset/ASN.RW.yaml
    interval: 86400
    format: yaml
</code></pre>