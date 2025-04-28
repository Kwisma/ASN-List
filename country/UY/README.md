
# ASN-List

实时更新 UY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  UYasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UY/UY_ASN.yaml"
    path: ./ruleset/UY_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UYasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UY/UY_ASN.yaml"
    path: ./ruleset/UY_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UY/UY_IP.yaml"
    path: ./ruleset/UY_IP.yaml
</code></pre>