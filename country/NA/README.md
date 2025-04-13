
# ASN-List

实时更新 NA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NA/ASN.NA.yaml"
    path: ./ruleset/ASN.NA.yaml
    interval: 86400
    format: yaml
</code></pre>