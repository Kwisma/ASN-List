
# ASN-List

实时更新 LR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LR/LR_ASN.yaml"
    path: ./ruleset/LR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LR/LR_ASN.yaml"
    path: ./ruleset/LR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LR/LR_IP.yaml"
    path: ./ruleset/LR_IP.yaml
</code></pre>