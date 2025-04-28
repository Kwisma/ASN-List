
# ASN-List

实时更新 CU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CU/CU_ASN.yaml"
    path: ./ruleset/CU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CU/CU_ASN.yaml"
    path: ./ruleset/CU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CU/CU_IP.yaml"
    path: ./ruleset/CU_IP.yaml
</code></pre>