
# ASN-List

实时更新 Amazon 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAmazon:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Amazon/ASN.Amazon.yaml"
    path: ./ruleset/ASN.Amazon.yaml
    interval: 86400
    format: yaml
</code></pre>