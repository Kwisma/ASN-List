
# ASN-List

实时更新 NC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNC:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NC/ASN.NC.yaml"
    path: ./ruleset/ASN.NC.yaml
    interval: 86400
    format: yaml
</code></pre>