
# ASN-List

实时更新 UK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  UKasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UK/UK_ASN.yaml"
    path: ./ruleset/UK_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UKasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UK/UK_ASN.yaml"
    path: ./ruleset/UK_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UK/UK_IP.yaml"
    path: ./ruleset/UK_IP.yaml
</code></pre>