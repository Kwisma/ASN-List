
# ASN-List

实时更新 NU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NU/ASN.NU.yaml"
    path: ./ruleset/ASN.NU.yaml
    interval: 86400
    format: yaml
</code></pre>