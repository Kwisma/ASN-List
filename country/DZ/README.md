
# ASN-List

实时更新 DZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNDZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DZ/ASN.DZ.yaml"
    path: ./ruleset/ASN.DZ.yaml
    interval: 86400
    format: yaml
</code></pre>