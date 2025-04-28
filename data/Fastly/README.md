
# ASN-List

实时更新 Fastly 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Fastlyasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Fastly/Fastly_ASN.yaml"
    path: ./ruleset/Fastly_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Fastlyasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Fastly/Fastly_ASN.yaml"
    path: ./ruleset/Fastly_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Fastlycidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Fastly/Fastly_IP.yaml"
    path: ./ruleset/Fastly_IP.yaml
</code></pre>