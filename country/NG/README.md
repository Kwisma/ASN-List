
# ASN-List

实时更新 NG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NG/ASN.NG.yaml"
    path: ./ruleset/ASN.NG.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNNG:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NG/ASN.NG.yaml"
    path: ./ruleset/ASN.NG.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NG/CIDR.NG.yaml"
    path: ./ruleset/NGcidr.yaml
</code></pre>