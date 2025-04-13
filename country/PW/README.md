
# ASN-List

实时更新 PW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PW/ASN.PW.yaml"
    path: ./ruleset/ASN.PW.yaml
    interval: 86400
    format: yaml
</code></pre>