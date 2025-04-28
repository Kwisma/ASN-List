
# ASN-List

实时更新 UZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  UZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UZ/UZ_ASN.yaml"
    path: ./ruleset/UZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UZ/UZ_ASN.yaml"
    path: ./ruleset/UZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UZ/UZ_IP.yaml"
    path: ./ruleset/UZ_IP.yaml
</code></pre>