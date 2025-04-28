
# ASN-List

实时更新 Google 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Googleasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Google/Google_ASN.yaml"
    path: ./ruleset/Google_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Googleasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Google/Google_ASN.yaml"
    path: ./ruleset/Google_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Googlecidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Google/Google_IP.yaml"
    path: ./ruleset/Google_IP.yaml
</code></pre>