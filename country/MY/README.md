
# ASN-List

实时更新 MY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MY/ASN.MY.yaml"
    path: ./ruleset/ASN.MY.yaml
    interval: 86400
    format: yaml
</code></pre>