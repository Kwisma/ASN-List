
# ASN-List

实时更新 BA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BA/ASN.BA.yaml"
    path: ./ruleset/ASN.BA.yaml
    interval: 86400
    format: yaml
</code></pre>