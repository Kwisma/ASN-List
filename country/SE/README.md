
# ASN-List

实时更新 SE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SE/ASN.SE.yaml"
    path: ./ruleset/ASN.SE.yaml
    interval: 86400
    format: yaml
</code></pre>