
# ASN-List

实时更新 MW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MW/ASN.MW.yaml"
    path: ./ruleset/ASN.MW.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMW:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MW/ASN.MW.yaml"
    path: ./ruleset/ASN.MW.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MW/CIDR.MW.yaml"
    path: ./ruleset/MWcidr.yaml
</code></pre>