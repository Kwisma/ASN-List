
# ASN-List

实时更新 GQ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGQ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GQ/ASN.GQ.yaml"
    path: ./ruleset/ASN.GQ.yaml
    interval: 86400
    format: yaml
</code></pre>