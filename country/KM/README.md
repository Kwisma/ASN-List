
# ASN-List

实时更新 KM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  KMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KM/KM_ASN.yaml"
    path: ./ruleset/KM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KM/KM_ASN.yaml"
    path: ./ruleset/KM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KM/KM_IP.yaml"
    path: ./ruleset/KM_IP.yaml
</code></pre>