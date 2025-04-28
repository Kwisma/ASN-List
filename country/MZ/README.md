
# ASN-List

实时更新 MZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MZ/MZ_ASN.yaml"
    path: ./ruleset/MZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MZ/MZ_ASN.yaml"
    path: ./ruleset/MZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MZ/MZ_IP.yaml"
    path: ./ruleset/MZ_IP.yaml
</code></pre>