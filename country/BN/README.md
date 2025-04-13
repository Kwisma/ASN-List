
# ASN-List

实时更新 BN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BN/ASN.BN.yaml"
    path: ./ruleset/ASN.BN.yaml
    interval: 86400
    format: yaml
</code></pre>