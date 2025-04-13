
# ASN-List

实时更新 VG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNVG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VG/ASN.VG.yaml"
    path: ./ruleset/ASN.VG.yaml
    interval: 86400
    format: yaml
</code></pre>