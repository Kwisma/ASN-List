
# ASN-List

实时更新 Twitter 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTwitter:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Twitter/ASN.Twitter.yaml"
    path: ./ruleset/ASN.Twitter.yaml
    interval: 86400
    format: yaml
</code></pre>