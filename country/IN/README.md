
# ASN-List

实时更新 IN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IN/ASN.IN.yaml"
    path: ./ruleset/ASN.IN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNIN:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IN/ASN.IN.yaml"
    path: ./ruleset/ASN.IN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  INcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IN/CIDR.IN.yaml"
    path: ./ruleset/INcidr.yaml
</code></pre>