
# ASN-List

实时更新 PA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PAasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PA/PA_ASN.yaml"
    path: ./ruleset/PA_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PAasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PA/PA_ASN.yaml"
    path: ./ruleset/PA_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PA/PA_IP.yaml"
    path: ./ruleset/PA_IP.yaml
</code></pre>