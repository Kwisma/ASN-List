
# ASN-List

实时更新 PA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PA/ASN.PA.yaml"
    path: ./ruleset/ASN.PA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PA/ASN.PA.yaml"
    path: ./ruleset/ASN.PA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PA/CIDR.PA.yaml"
    path: ./ruleset/PAcidr.yaml
</code></pre>