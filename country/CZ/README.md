
# ASN-List

实时更新 CZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CZ/ASN.CZ.yaml"
    path: ./ruleset/ASN.CZ.yaml
    interval: 86400
    format: yaml
</code></pre>