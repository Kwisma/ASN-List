
# ASN-List

实时更新 Netflix 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Netflixasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Netflix/Netflix_ASN.yaml"
    path: ./ruleset/Netflix_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Netflixasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Netflix/Netflix_ASN.yaml"
    path: ./ruleset/Netflix_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Netflixcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Netflix/Netflix_IP.yaml"
    path: ./ruleset/Netflix_IP.yaml
</code></pre>