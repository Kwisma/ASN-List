
# ASN-List

实时更新 BI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BIasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BI/BI_ASN.yaml"
    path: ./ruleset/BI_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BIasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BI/BI_ASN.yaml"
    path: ./ruleset/BI_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BI/BI_IP.yaml"
    path: ./ruleset/BI_IP.yaml
</code></pre>