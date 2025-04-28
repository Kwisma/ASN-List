
# ASN-List

实时更新 AE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  AEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AE/AE_ASN.yaml"
    path: ./ruleset/AE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AE/AE_ASN.yaml"
    path: ./ruleset/AE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AE/AE_IP.yaml"
    path: ./ruleset/AE_IP.yaml
</code></pre>