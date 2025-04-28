
# ASN-List

实时更新 MU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MU/MU_ASN.yaml"
    path: ./ruleset/MU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MU/MU_ASN.yaml"
    path: ./ruleset/MU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MU/MU_IP.yaml"
    path: ./ruleset/MU_IP.yaml
</code></pre>