
# ASN-List

实时更新 YE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  YEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/YE/YE_ASN.yaml"
    path: ./ruleset/YE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  YEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/YE/YE_ASN.yaml"
    path: ./ruleset/YE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  YEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/YE/YE_IP.yaml"
    path: ./ruleset/YE_IP.yaml
</code></pre>