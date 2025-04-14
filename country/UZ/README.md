
# ASN-List

实时更新 UZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNUZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UZ/ASN.UZ.yaml"
    path: ./ruleset/ASN.UZ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNUZ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UZ/ASN.UZ.yaml"
    path: ./ruleset/ASN.UZ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UZ/CIDR.UZ.yaml"
    path: ./ruleset/UZcidr.yaml
</code></pre>