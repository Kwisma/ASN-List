
# ASN-List

实时更新 SM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SM/ASN.SM.yaml"
    path: ./ruleset/ASN.SM.yaml
    interval: 86400
    format: yaml
</code></pre>