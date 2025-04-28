
# ASN-List

实时更新 KZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  KZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KZ/KZ_ASN.yaml"
    path: ./ruleset/KZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KZ/KZ_ASN.yaml"
    path: ./ruleset/KZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KZ/KZ_IP.yaml"
    path: ./ruleset/KZ_IP.yaml
</code></pre>