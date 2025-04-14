
# ASN-List

实时更新 SG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SG/ASN.SG.yaml"
    path: ./ruleset/ASN.SG.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSG:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SG/ASN.SG.yaml"
    path: ./ruleset/ASN.SG.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SG/CIDR.SG.yaml"
    path: ./ruleset/SGcidr.yaml
</code></pre>