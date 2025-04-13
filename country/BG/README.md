
# ASN-List

实时更新 BG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BG/ASN.BG.yaml"
    path: ./ruleset/ASN.BG.yaml
    interval: 86400
    format: yaml
</code></pre>