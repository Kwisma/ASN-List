
# ASN-List

实时更新 BZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BZ/BZ_ASN.yaml"
    path: ./ruleset/BZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BZ/BZ_ASN.yaml"
    path: ./ruleset/BZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BZ/BZ_IP.yaml"
    path: ./ruleset/BZ_IP.yaml
</code></pre>