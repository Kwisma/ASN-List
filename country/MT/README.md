
# ASN-List

实时更新 MT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MT/ASN.MT.yaml"
    path: ./ruleset/ASN.MT.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMT:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MT/ASN.MT.yaml"
    path: ./ruleset/ASN.MT.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MT/CIDR.MT.yaml"
    path: ./ruleset/MTcidr.yaml
</code></pre>