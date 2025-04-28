
# ASN-List

实时更新 AP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  APasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AP/AP_ASN.yaml"
    path: ./ruleset/AP_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  APasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AP/AP_ASN.yaml"
    path: ./ruleset/AP_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  APcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AP/AP_IP.yaml"
    path: ./ruleset/AP_IP.yaml
</code></pre>