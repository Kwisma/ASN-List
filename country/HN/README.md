
# ASN-List

实时更新 HN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNHN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HN/ASN.HN.yaml"
    path: ./ruleset/ASN.HN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNHN:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HN/ASN.HN.yaml"
    path: ./ruleset/ASN.HN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HN/CIDR.HN.yaml"
    path: ./ruleset/HNcidr.yaml
</code></pre>