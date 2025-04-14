
# ASN-List

实时更新 KN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KN/ASN.KN.yaml"
    path: ./ruleset/ASN.KN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKN:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KN/ASN.KN.yaml"
    path: ./ruleset/ASN.KN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KN/CIDR.KN.yaml"
    path: ./ruleset/KNcidr.yaml
</code></pre>