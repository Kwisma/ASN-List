
# ASN-List

实时更新 KY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KY/ASN.KY.yaml"
    path: ./ruleset/ASN.KY.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKY:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KY/ASN.KY.yaml"
    path: ./ruleset/ASN.KY.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KY/CIDR.KY.yaml"
    path: ./ruleset/KYcidr.yaml
</code></pre>