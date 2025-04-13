
# ASN-List

实时更新 WF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNWF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/WF/ASN.WF.yaml"
    path: ./ruleset/ASN.WF.yaml
    interval: 86400
    format: yaml
</code></pre>