
# ASN-List

实时更新 US 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  USasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/US/US_ASN.yaml"
    path: ./ruleset/US_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  USasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/US/US_ASN.yaml"
    path: ./ruleset/US_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/US/US_IP.yaml"
    path: ./ruleset/US_IP.yaml
</code></pre>