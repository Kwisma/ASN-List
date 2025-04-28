
# ASN-List

实时更新 KG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  KGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KG/KG_ASN.yaml"
    path: ./ruleset/KG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KG/KG_ASN.yaml"
    path: ./ruleset/KG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KG/KG_IP.yaml"
    path: ./ruleset/KG_IP.yaml
</code></pre>