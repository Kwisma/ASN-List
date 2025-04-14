
# ASN-List

实时更新 UK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNUK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UK/ASN.UK.yaml"
    path: ./ruleset/ASN.UK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNUK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UK/ASN.UK.yaml"
    path: ./ruleset/ASN.UK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UK/CIDR.UK.yaml"
    path: ./ruleset/UKcidr.yaml
</code></pre>