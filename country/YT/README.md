
# ASN-List

实时更新 YT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNYT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/YT/ASN.YT.yaml"
    path: ./ruleset/ASN.YT.yaml
    interval: 86400
    format: yaml
</code></pre>