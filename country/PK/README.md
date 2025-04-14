
# ASN-List

实时更新 PK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PK/ASN.PK.yaml"
    path: ./ruleset/ASN.PK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PK/ASN.PK.yaml"
    path: ./ruleset/ASN.PK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PK/CIDR.PK.yaml"
    path: ./ruleset/PKcidr.yaml
</code></pre>