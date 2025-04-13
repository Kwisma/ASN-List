
# ASN-List

实时更新 GD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGD:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GD/ASN.GD.yaml"
    path: ./ruleset/ASN.GD.yaml
    interval: 86400
    format: yaml
</code></pre>