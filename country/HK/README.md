
# ASN-List

实时更新 HK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNHK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HK/ASN.HK.yaml"
    path: ./ruleset/ASN.HK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNHK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HK/ASN.HK.yaml"
    path: ./ruleset/ASN.HK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HK/CIDR.HK.yaml"
    path: ./ruleset/HKcidr.yaml
</code></pre>