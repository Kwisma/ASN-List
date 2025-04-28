
# ASN-List

实时更新 GY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GYasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GY/GY_ASN.yaml"
    path: ./ruleset/GY_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GYasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GY/GY_ASN.yaml"
    path: ./ruleset/GY_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GY/GY_IP.yaml"
    path: ./ruleset/GY_IP.yaml
</code></pre>