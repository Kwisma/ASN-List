
# ASN-List

实时更新 VC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNVC:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VC/ASN.VC.yaml"
    path: ./ruleset/ASN.VC.yaml
    interval: 86400
    format: yaml
</code></pre>