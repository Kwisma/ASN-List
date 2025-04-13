
# ASN-List

实时更新 Facebook 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFacebook:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Facebook/ASN.Facebook.yaml"
    path: ./ruleset/ASN.Facebook.yaml
    interval: 86400
    format: yaml
</code></pre>