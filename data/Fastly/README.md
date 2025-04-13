
# ASN-List

实时更新 Fastly 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFastly:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Fastly/ASN.Fastly.yaml"
    path: ./ruleset/ASN.Fastly.yaml
    interval: 86400
    format: yaml
</code></pre>