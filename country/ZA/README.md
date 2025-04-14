
# ASN-List

实时更新 ZA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNZA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ZA/ASN.ZA.yaml"
    path: ./ruleset/ASN.ZA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNZA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ZA/ASN.ZA.yaml"
    path: ./ruleset/ASN.ZA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ZAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ZA/CIDR.ZA.yaml"
    path: ./ruleset/ZAcidr.yaml
</code></pre>