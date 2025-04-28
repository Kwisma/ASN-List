
# ASN-List

实时更新 SZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SZ/SZ_ASN.yaml"
    path: ./ruleset/SZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SZ/SZ_ASN.yaml"
    path: ./ruleset/SZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SZ/SZ_IP.yaml"
    path: ./ruleset/SZ_IP.yaml
</code></pre>