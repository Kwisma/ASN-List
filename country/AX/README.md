
# ASN-List

实时更新 AX 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAX:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AX/ASN.AX.yaml"
    path: ./ruleset/ASN.AX.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAX:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AX/ASN.AX.yaml"
    path: ./ruleset/ASN.AX.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AXcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AX/CIDR.AX.yaml"
    path: ./ruleset/AXcidr.yaml
</code></pre>