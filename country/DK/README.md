
# ASN-List

实时更新 DK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNDK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DK/ASN.DK.yaml"
    path: ./ruleset/ASN.DK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNDK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DK/ASN.DK.yaml"
    path: ./ruleset/ASN.DK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DK/CIDR.DK.yaml"
    path: ./ruleset/DKcidr.yaml
</code></pre>