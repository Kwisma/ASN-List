
# ASN-List

实时更新 IR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IR/ASN.IR.yaml"
    path: ./ruleset/ASN.IR.yaml
    interval: 86400
    format: yaml
</code></pre>