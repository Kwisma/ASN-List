
# ASN-List

实时更新 GB 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGB:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GB/ASN.GB.yaml"
    path: ./ruleset/ASN.GB.yaml
    interval: 86400
    format: yaml
</code></pre>