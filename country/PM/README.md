
# ASN-List

实时更新 PM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PM/ASN.PM.yaml"
    path: ./ruleset/ASN.PM.yaml
    interval: 86400
    format: yaml
</code></pre>