
# ASN-List

实时更新 BI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BI/ASN.BI.yaml"
    path: ./ruleset/ASN.BI.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBI:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BI/ASN.BI.yaml"
    path: ./ruleset/ASN.BI.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BI/CIDR.BI.yaml"
    path: ./ruleset/BIcidr.yaml
</code></pre>