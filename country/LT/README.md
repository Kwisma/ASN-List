
# ASN-List

实时更新 LT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LT/ASN.LT.yaml"
    path: ./ruleset/ASN.LT.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLT:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LT/ASN.LT.yaml"
    path: ./ruleset/ASN.LT.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LT/CIDR.LT.yaml"
    path: ./ruleset/LTcidr.yaml
</code></pre>