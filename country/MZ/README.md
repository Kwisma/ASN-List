
# ASN-List

实时更新 MZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MZ/ASN.MZ.yaml"
    path: ./ruleset/ASN.MZ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMZ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MZ/ASN.MZ.yaml"
    path: ./ruleset/ASN.MZ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MZ/CIDR.MZ.yaml"
    path: ./ruleset/MZcidr.yaml
</code></pre>