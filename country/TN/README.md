
# ASN-List

实时更新 TN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TN/ASN.TN.yaml"
    path: ./ruleset/ASN.TN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTN:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TN/ASN.TN.yaml"
    path: ./ruleset/ASN.TN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TN/CIDR.TN.yaml"
    path: ./ruleset/TNcidr.yaml
</code></pre>