
# ASN-List

实时更新 PL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPL:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PL/ASN.PL.yaml"
    path: ./ruleset/ASN.PL.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPL:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PL/ASN.PL.yaml"
    path: ./ruleset/ASN.PL.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PL/CIDR.PL.yaml"
    path: ./ruleset/PLcidr.yaml
</code></pre>