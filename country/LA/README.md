
# ASN-List

实时更新 LA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LA/ASN.LA.yaml"
    path: ./ruleset/ASN.LA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LA/ASN.LA.yaml"
    path: ./ruleset/ASN.LA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LA/CIDR.LA.yaml"
    path: ./ruleset/LAcidr.yaml
</code></pre>