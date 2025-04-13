
# ASN-List

实时更新 BM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BM/ASN.BM.yaml"
    path: ./ruleset/ASN.BM.yaml
    interval: 86400
    format: yaml
</code></pre>