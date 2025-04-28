
# ASN-List

实时更新 AZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  AZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AZ/AZ_ASN.yaml"
    path: ./ruleset/AZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AZ/AZ_ASN.yaml"
    path: ./ruleset/AZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AZ/AZ_IP.yaml"
    path: ./ruleset/AZ_IP.yaml
</code></pre>