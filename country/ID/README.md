
# ASN-List

实时更新 ID 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNID:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ID/ASN.ID.yaml"
    path: ./ruleset/ASN.ID.yaml
    interval: 86400
    format: yaml
</code></pre>