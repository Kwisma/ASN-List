
# ASN-List

实时更新 DM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNDM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DM/ASN.DM.yaml"
    path: ./ruleset/ASN.DM.yaml
    interval: 86400
    format: yaml
</code></pre>