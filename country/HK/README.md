
# ASN-List

实时更新 HK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  HKasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HK/HK_ASN.yaml"
    path: ./ruleset/HK_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HKasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HK/HK_ASN.yaml"
    path: ./ruleset/HK_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HK/HK_IP.yaml"
    path: ./ruleset/HK_IP.yaml
</code></pre>