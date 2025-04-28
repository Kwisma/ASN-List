
# ASN-List

实时更新 LY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LYasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LY/LY_ASN.yaml"
    path: ./ruleset/LY_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LYasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LY/LY_ASN.yaml"
    path: ./ruleset/LY_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LY/LY_IP.yaml"
    path: ./ruleset/LY_IP.yaml
</code></pre>