
# ASN-List

实时更新 PK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PKasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PK/PK_ASN.yaml"
    path: ./ruleset/PK_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PKasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PK/PK_ASN.yaml"
    path: ./ruleset/PK_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PK/PK_IP.yaml"
    path: ./ruleset/PK_IP.yaml
</code></pre>