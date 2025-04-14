
# ASN-List

实时更新 CI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CI/ASN.CI.yaml"
    path: ./ruleset/ASN.CI.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCI:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CI/ASN.CI.yaml"
    path: ./ruleset/ASN.CI.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CI/CIDR.CI.yaml"
    path: ./ruleset/CIcidr.yaml
</code></pre>