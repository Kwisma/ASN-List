
# ASN-List

实时更新 Amazon 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Amazonasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Amazon/Amazon_ASN.yaml"
    path: ./ruleset/Amazon_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Amazonasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Amazon/Amazon_ASN.yaml"
    path: ./ruleset/Amazon_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Amazoncidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Amazon/Amazon_IP.yaml"
    path: ./ruleset/Amazon_IP.yaml
</code></pre>