
# ASN-List

实时更新 YE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNYE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/YE/ASN.YE.yaml"
    path: ./ruleset/ASN.YE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNYE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/YE/ASN.YE.yaml"
    path: ./ruleset/ASN.YE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  YEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/YE/CIDR.YE.yaml"
    path: ./ruleset/YEcidr.yaml
</code></pre>