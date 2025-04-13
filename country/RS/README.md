
# ASN-List

实时更新 RS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNRS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RS/ASN.RS.yaml"
    path: ./ruleset/ASN.RS.yaml
    interval: 86400
    format: yaml
</code></pre>