
# ASN-List

实时更新 ZW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ZWasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ZW/ZW_ASN.yaml"
    path: ./ruleset/ZW_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ZWasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ZW/ZW_ASN.yaml"
    path: ./ruleset/ZW_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ZWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ZW/ZW_IP.yaml"
    path: ./ruleset/ZW_IP.yaml
</code></pre>