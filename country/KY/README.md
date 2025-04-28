
# ASN-List

实时更新 KY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  KYasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KY/KY_ASN.yaml"
    path: ./ruleset/KY_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KYasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KY/KY_ASN.yaml"
    path: ./ruleset/KY_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KY/KY_IP.yaml"
    path: ./ruleset/KY_IP.yaml
</code></pre>