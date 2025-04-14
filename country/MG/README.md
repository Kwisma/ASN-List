
# ASN-List

实时更新 MG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MG/ASN.MG.yaml"
    path: ./ruleset/ASN.MG.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMG:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MG/ASN.MG.yaml"
    path: ./ruleset/ASN.MG.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MG/CIDR.MG.yaml"
    path: ./ruleset/MGcidr.yaml
</code></pre>