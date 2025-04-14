
# ASN-List

实时更新 PS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PS/ASN.PS.yaml"
    path: ./ruleset/ASN.PS.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPS:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PS/ASN.PS.yaml"
    path: ./ruleset/ASN.PS.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PS/CIDR.PS.yaml"
    path: ./ruleset/PScidr.yaml
</code></pre>