
# ASN-List

实时更新 CY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CYasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CY/CY_ASN.yaml"
    path: ./ruleset/CY_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CYasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CY/CY_ASN.yaml"
    path: ./ruleset/CY_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CY/CY_IP.yaml"
    path: ./ruleset/CY_IP.yaml
</code></pre>