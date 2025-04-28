
# ASN-List

实时更新 NR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NR/NR_ASN.yaml"
    path: ./ruleset/NR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NR/NR_ASN.yaml"
    path: ./ruleset/NR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NR/NR_IP.yaml"
    path: ./ruleset/NR_IP.yaml
</code></pre>