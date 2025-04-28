
# ASN-List

实时更新 BN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BNasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BN/BN_ASN.yaml"
    path: ./ruleset/BN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BNasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BN/BN_ASN.yaml"
    path: ./ruleset/BN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BN/BN_IP.yaml"
    path: ./ruleset/BN_IP.yaml
</code></pre>