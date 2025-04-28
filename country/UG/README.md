
# ASN-List

实时更新 UG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  UGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UG/UG_ASN.yaml"
    path: ./ruleset/UG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UG/UG_ASN.yaml"
    path: ./ruleset/UG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UG/UG_IP.yaml"
    path: ./ruleset/UG_IP.yaml
</code></pre>