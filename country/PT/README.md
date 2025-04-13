
# ASN-List

实时更新 PT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PT/ASN.PT.yaml"
    path: ./ruleset/ASN.PT.yaml
    interval: 86400
    format: yaml
</code></pre>