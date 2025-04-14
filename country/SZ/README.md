
# ASN-List

实时更新 SZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SZ/ASN.SZ.yaml"
    path: ./ruleset/ASN.SZ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSZ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SZ/ASN.SZ.yaml"
    path: ./ruleset/ASN.SZ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SZ/CIDR.SZ.yaml"
    path: ./ruleset/SZcidr.yaml
</code></pre>