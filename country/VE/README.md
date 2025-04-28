
# ASN-List

实时更新 VE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  VEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VE/VE_ASN.yaml"
    path: ./ruleset/VE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VE/VE_ASN.yaml"
    path: ./ruleset/VE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VE/VE_IP.yaml"
    path: ./ruleset/VE_IP.yaml
</code></pre>