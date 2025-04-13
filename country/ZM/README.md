
# ASN-List

实时更新 ZM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNZM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ZM/ASN.ZM.yaml"
    path: ./ruleset/ASN.ZM.yaml
    interval: 86400
    format: yaml
</code></pre>