
# ASN-List

实时更新 HT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  HTasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HT/HT_ASN.yaml"
    path: ./ruleset/HT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HTasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HT/HT_ASN.yaml"
    path: ./ruleset/HT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HT/HT_IP.yaml"
    path: ./ruleset/HT_IP.yaml
</code></pre>