
# ASN-List

实时更新 BB 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBB:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BB/ASN.BB.yaml"
    path: ./ruleset/ASN.BB.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBB:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BB/ASN.BB.yaml"
    path: ./ruleset/ASN.BB.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BBcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BB/CIDR.BB.yaml"
    path: ./ruleset/BBcidr.yaml
</code></pre>