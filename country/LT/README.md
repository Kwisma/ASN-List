
# ASN-List

实时更新 LT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LTasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LT/LT_ASN.yaml"
    path: ./ruleset/LT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LTasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LT/LT_ASN.yaml"
    path: ./ruleset/LT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LT/LT_IP.yaml"
    path: ./ruleset/LT_IP.yaml
</code></pre>