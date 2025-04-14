
# ASN-List

实时更新 MM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MM/ASN.MM.yaml"
    path: ./ruleset/ASN.MM.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMM:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MM/ASN.MM.yaml"
    path: ./ruleset/ASN.MM.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MM/CIDR.MM.yaml"
    path: ./ruleset/MMcidr.yaml
</code></pre>