
# ASN-List

实时更新 LU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LU/ASN.LU.yaml"
    path: ./ruleset/ASN.LU.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLU:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LU/ASN.LU.yaml"
    path: ./ruleset/ASN.LU.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LU/CIDR.LU.yaml"
    path: ./ruleset/LUcidr.yaml
</code></pre>