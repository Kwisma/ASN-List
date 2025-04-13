
# ASN-List

实时更新 VN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNVN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VN/ASN.VN.yaml"
    path: ./ruleset/ASN.VN.yaml
    interval: 86400
    format: yaml
</code></pre>