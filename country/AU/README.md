
# ASN-List

实时更新 AU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AU/ASN.AU.yaml"
    path: ./ruleset/ASN.AU.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAU:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AU/ASN.AU.yaml"
    path: ./ruleset/ASN.AU.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AU/CIDR.AU.yaml"
    path: ./ruleset/AUcidr.yaml
</code></pre>