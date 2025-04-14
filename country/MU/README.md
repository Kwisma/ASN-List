
# ASN-List

实时更新 MU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MU/ASN.MU.yaml"
    path: ./ruleset/ASN.MU.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMU:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MU/ASN.MU.yaml"
    path: ./ruleset/ASN.MU.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MU/CIDR.MU.yaml"
    path: ./ruleset/MUcidr.yaml
</code></pre>