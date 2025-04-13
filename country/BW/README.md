
# ASN-List

实时更新 BW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BW/ASN.BW.yaml"
    path: ./ruleset/ASN.BW.yaml
    interval: 86400
    format: yaml
</code></pre>