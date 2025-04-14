
# ASN-List

实时更新 GY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GY/ASN.GY.yaml"
    path: ./ruleset/ASN.GY.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGY:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GY/ASN.GY.yaml"
    path: ./ruleset/ASN.GY.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GY/CIDR.GY.yaml"
    path: ./ruleset/GYcidr.yaml
</code></pre>