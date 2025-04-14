
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

<pre><code class="language-javascript">
rule-providers:
  ASNTwitter:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Twitter/ASN.Twitter.yaml"
    path: ./ruleset/ASN.Twitter.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Twittercidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Twitter/CIDR.Twitter.yaml"
    path: ./ruleset/Twittercidr.yaml
</code></pre>