
# ASN-List

实时更新 BF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BF/ASN.BF.yaml"
    path: ./ruleset/ASN.BF.yaml
    interval: 86400
    format: yaml
</code></pre>