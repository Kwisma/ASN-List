
# ASN-List

实时更新 BY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BYasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BY/BY_ASN.yaml"
    path: ./ruleset/BY_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BYasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BY/BY_ASN.yaml"
    path: ./ruleset/BY_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BY/BY_IP.yaml"
    path: ./ruleset/BY_IP.yaml
</code></pre>