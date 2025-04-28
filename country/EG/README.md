
# ASN-List

实时更新 EG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  EGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/EG/EG_ASN.yaml"
    path: ./ruleset/EG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  EGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EG/EG_ASN.yaml"
    path: ./ruleset/EG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  EGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EG/EG_IP.yaml"
    path: ./ruleset/EG_IP.yaml
</code></pre>