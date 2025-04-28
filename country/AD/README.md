
# ASN-List

实时更新 AD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ADasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AD/AD_ASN.yaml"
    path: ./ruleset/AD_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ADasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AD/AD_ASN.yaml"
    path: ./ruleset/AD_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ADcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AD/AD_IP.yaml"
    path: ./ruleset/AD_IP.yaml
</code></pre>