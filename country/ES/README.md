
# ASN-List

实时更新 ES 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNES:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ES/ASN.ES.yaml"
    path: ./ruleset/ASN.ES.yaml
    interval: 86400
    format: yaml
</code></pre>