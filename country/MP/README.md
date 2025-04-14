
# ASN-List

实时更新 MP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMP:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MP/ASN.MP.yaml"
    path: ./ruleset/ASN.MP.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMP:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MP/ASN.MP.yaml"
    path: ./ruleset/ASN.MP.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MPcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MP/CIDR.MP.yaml"
    path: ./ruleset/MPcidr.yaml
</code></pre>