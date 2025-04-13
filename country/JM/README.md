
# ASN-List

实时更新 JM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNJM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/JM/ASN.JM.yaml"
    path: ./ruleset/ASN.JM.yaml
    interval: 86400
    format: yaml
</code></pre>