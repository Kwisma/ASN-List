
# ASN-List

实时更新 BD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBD:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BD/ASN.BD.yaml"
    path: ./ruleset/ASN.BD.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBD:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BD/ASN.BD.yaml"
    path: ./ruleset/ASN.BD.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BD/CIDR.BD.yaml"
    path: ./ruleset/BDcidr.yaml
</code></pre>