
# ASN-List

实时更新 AR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ARasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AR/AR_ASN.yaml"
    path: ./ruleset/AR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ARasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AR/AR_ASN.yaml"
    path: ./ruleset/AR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ARcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AR/AR_IP.yaml"
    path: ./ruleset/AR_IP.yaml
</code></pre>