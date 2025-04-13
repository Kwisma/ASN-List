
# ASN-List

实时更新 KR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KR/ASN.KR.yaml"
    path: ./ruleset/ASN.KR.yaml
    interval: 86400
    format: yaml
</code></pre>