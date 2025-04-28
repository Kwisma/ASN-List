
# ASN-List

实时更新 Twitter 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Twitterasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Twitter/Twitter_ASN.yaml"
    path: ./ruleset/Twitter_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Twitterasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Twitter/Twitter_ASN.yaml"
    path: ./ruleset/Twitter_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Twittercidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Twitter/Twitter_IP.yaml"
    path: ./ruleset/Twitter_IP.yaml
</code></pre>