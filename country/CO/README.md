
# ASN-List

实时更新 CO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CO/ASN.CO.yaml"
    path: ./ruleset/ASN.CO.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCO:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CO/ASN.CO.yaml"
    path: ./ruleset/ASN.CO.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  COcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CO/CIDR.CO.yaml"
    path: ./ruleset/COcidr.yaml
</code></pre>