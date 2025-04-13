
# ASN-List

实时更新 SV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSV:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SV/ASN.SV.yaml"
    path: ./ruleset/ASN.SV.yaml
    interval: 86400
    format: yaml
</code></pre>