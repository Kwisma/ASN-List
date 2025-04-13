
# ASN-List

实时更新 GI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GI/ASN.GI.yaml"
    path: ./ruleset/ASN.GI.yaml
    interval: 86400
    format: yaml
</code></pre>