
# ASN-List

实时更新 BT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BT/ASN.BT.yaml"
    path: ./ruleset/ASN.BT.yaml
    interval: 86400
    format: yaml
</code></pre>