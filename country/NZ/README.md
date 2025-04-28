
# ASN-List

实时更新 NZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NZ/NZ_ASN.yaml"
    path: ./ruleset/NZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NZ/NZ_ASN.yaml"
    path: ./ruleset/NZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NZ/NZ_IP.yaml"
    path: ./ruleset/NZ_IP.yaml
</code></pre>