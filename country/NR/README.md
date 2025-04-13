
# ASN-List

实时更新 NR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NR/ASN.NR.yaml"
    path: ./ruleset/ASN.NR.yaml
    interval: 86400
    format: yaml
</code></pre>