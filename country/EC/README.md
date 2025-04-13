
# ASN-List

实时更新 EC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNEC:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/EC/ASN.EC.yaml"
    path: ./ruleset/ASN.EC.yaml
    interval: 86400
    format: yaml
</code></pre>