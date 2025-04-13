
# ASN-List

实时更新 BJ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBJ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BJ/ASN.BJ.yaml"
    path: ./ruleset/ASN.BJ.yaml
    interval: 86400
    format: yaml
</code></pre>