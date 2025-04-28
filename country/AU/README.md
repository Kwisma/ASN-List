
# ASN-List

实时更新 AU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  AUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AU/AU_ASN.yaml"
    path: ./ruleset/AU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AU/AU_ASN.yaml"
    path: ./ruleset/AU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AU/AU_IP.yaml"
    path: ./ruleset/AU_IP.yaml
</code></pre>