
# ASN-List

实时更新 LI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LI/ASN.LI.yaml"
    path: ./ruleset/ASN.LI.yaml
    interval: 86400
    format: yaml
</code></pre>