
# ASN-List

实时更新 NZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NZ/ASN.NZ.yaml"
    path: ./ruleset/ASN.NZ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNNZ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NZ/ASN.NZ.yaml"
    path: ./ruleset/ASN.NZ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NZ/CIDR.NZ.yaml"
    path: ./ruleset/NZcidr.yaml
</code></pre>