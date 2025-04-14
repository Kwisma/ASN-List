
# ASN-List

实时更新 AZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AZ/ASN.AZ.yaml"
    path: ./ruleset/ASN.AZ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAZ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AZ/ASN.AZ.yaml"
    path: ./ruleset/ASN.AZ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AZ/CIDR.AZ.yaml"
    path: ./ruleset/AZcidr.yaml
</code></pre>