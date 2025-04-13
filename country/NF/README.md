
# ASN-List

实时更新 NF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NF/ASN.NF.yaml"
    path: ./ruleset/ASN.NF.yaml
    interval: 86400
    format: yaml
</code></pre>