
# ASN-List

实时更新 NP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNP:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NP/ASN.NP.yaml"
    path: ./ruleset/ASN.NP.yaml
    interval: 86400
    format: yaml
</code></pre>