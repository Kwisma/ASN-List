
# ASN-List

实时更新 DE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNDE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DE/ASN.DE.yaml"
    path: ./ruleset/ASN.DE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNDE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DE/ASN.DE.yaml"
    path: ./ruleset/ASN.DE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DE/CIDR.DE.yaml"
    path: ./ruleset/DEcidr.yaml
</code></pre>