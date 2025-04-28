
# ASN-List

实时更新 CZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CZ/CZ_ASN.yaml"
    path: ./ruleset/CZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CZ/CZ_ASN.yaml"
    path: ./ruleset/CZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CZ/CZ_IP.yaml"
    path: ./ruleset/CZ_IP.yaml
</code></pre>