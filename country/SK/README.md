
# ASN-List

实时更新 SK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SK/ASN.SK.yaml"
    path: ./ruleset/ASN.SK.yaml
    interval: 86400
    format: yaml
</code></pre>