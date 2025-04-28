
# ASN-List

实时更新 LU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LU/LU_ASN.yaml"
    path: ./ruleset/LU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LU/LU_ASN.yaml"
    path: ./ruleset/LU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LU/LU_IP.yaml"
    path: ./ruleset/LU_IP.yaml
</code></pre>