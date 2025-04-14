
# ASN-List

实时更新 CD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCD:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CD/ASN.CD.yaml"
    path: ./ruleset/ASN.CD.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCD:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CD/ASN.CD.yaml"
    path: ./ruleset/ASN.CD.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CD/CIDR.CD.yaml"
    path: ./ruleset/CDcidr.yaml
</code></pre>