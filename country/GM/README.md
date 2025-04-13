
# ASN-List

实时更新 GM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GM/ASN.GM.yaml"
    path: ./ruleset/ASN.GM.yaml
    interval: 86400
    format: yaml
</code></pre>