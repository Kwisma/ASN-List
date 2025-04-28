
# ASN-List

实时更新 RU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  RUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RU/RU_ASN.yaml"
    path: ./ruleset/RU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  RUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RU/RU_ASN.yaml"
    path: ./ruleset/RU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  RUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RU/RU_IP.yaml"
    path: ./ruleset/RU_IP.yaml
</code></pre>