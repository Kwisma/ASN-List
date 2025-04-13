
# ASN-List

实时更新 EE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNEE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/EE/ASN.EE.yaml"
    path: ./ruleset/ASN.EE.yaml
    interval: 86400
    format: yaml
</code></pre>