
# ASN-List

实时更新 FJ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFJ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FJ/ASN.FJ.yaml"
    path: ./ruleset/ASN.FJ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNFJ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FJ/ASN.FJ.yaml"
    path: ./ruleset/ASN.FJ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FJcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FJ/CIDR.FJ.yaml"
    path: ./ruleset/FJcidr.yaml
</code></pre>