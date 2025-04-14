
# ASN-List

实时更新 Amazon 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAmazon:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Amazon/ASN.Amazon.yaml"
    path: ./ruleset/ASN.Amazon.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAmazon:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Amazon/ASN.Amazon.yaml"
    path: ./ruleset/ASN.Amazon.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Amazoncidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Amazon/CIDR.Amazon.yaml"
    path: ./ruleset/Amazoncidr.yaml
</code></pre>