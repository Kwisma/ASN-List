
# ASN-List

实时更新 FK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FK/ASN.FK.yaml"
    path: ./ruleset/ASN.FK.yaml
    interval: 86400
    format: yaml
</code></pre>