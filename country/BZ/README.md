
# ASN-List

实时更新 BZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BZ/ASN.BZ.yaml"
    path: ./ruleset/ASN.BZ.yaml
    interval: 86400
    format: yaml
</code></pre>