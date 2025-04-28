
# ASN-List

实时更新 FJ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  FJasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FJ/FJ_ASN.yaml"
    path: ./ruleset/FJ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FJasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FJ/FJ_ASN.yaml"
    path: ./ruleset/FJ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FJcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FJ/FJ_IP.yaml"
    path: ./ruleset/FJ_IP.yaml
</code></pre>