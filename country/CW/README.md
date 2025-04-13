
# ASN-List

实时更新 CW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CW/ASN.CW.yaml"
    path: ./ruleset/ASN.CW.yaml
    interval: 86400
    format: yaml
</code></pre>