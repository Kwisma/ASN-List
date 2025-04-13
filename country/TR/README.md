
# ASN-List

实时更新 TR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TR/ASN.TR.yaml"
    path: ./ruleset/ASN.TR.yaml
    interval: 86400
    format: yaml
</code></pre>