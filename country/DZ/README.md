
# ASN-List

实时更新 DZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  DZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DZ/DZ_ASN.yaml"
    path: ./ruleset/DZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DZ/DZ_ASN.yaml"
    path: ./ruleset/DZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DZ/DZ_IP.yaml"
    path: ./ruleset/DZ_IP.yaml
</code></pre>