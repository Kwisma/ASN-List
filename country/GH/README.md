
# ASN-List

实时更新 GH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGH:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GH/ASN.GH.yaml"
    path: ./ruleset/ASN.GH.yaml
    interval: 86400
    format: yaml
</code></pre>