
# ASN-List

实时更新 RU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNRU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RU/ASN.RU.yaml"
    path: ./ruleset/ASN.RU.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNRU:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RU/ASN.RU.yaml"
    path: ./ruleset/ASN.RU.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  RUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RU/CIDR.RU.yaml"
    path: ./ruleset/RUcidr.yaml
</code></pre>