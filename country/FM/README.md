
# ASN-List

实时更新 FM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FM/ASN.FM.yaml"
    path: ./ruleset/ASN.FM.yaml
    interval: 86400
    format: yaml
</code></pre>