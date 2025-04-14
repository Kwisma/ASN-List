
# ASN-List

实时更新 ZW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNZW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ZW/ASN.ZW.yaml"
    path: ./ruleset/ASN.ZW.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNZW:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ZW/ASN.ZW.yaml"
    path: ./ruleset/ASN.ZW.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ZWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ZW/CIDR.ZW.yaml"
    path: ./ruleset/ZWcidr.yaml
</code></pre>