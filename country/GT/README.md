
# ASN-List

实时更新 GT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GTasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GT/GT_ASN.yaml"
    path: ./ruleset/GT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GTasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GT/GT_ASN.yaml"
    path: ./ruleset/GT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GT/GT_IP.yaml"
    path: ./ruleset/GT_IP.yaml
</code></pre>