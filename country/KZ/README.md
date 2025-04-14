
# ASN-List

实时更新 KZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KZ/ASN.KZ.yaml"
    path: ./ruleset/ASN.KZ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKZ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KZ/ASN.KZ.yaml"
    path: ./ruleset/ASN.KZ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KZ/CIDR.KZ.yaml"
    path: ./ruleset/KZcidr.yaml
</code></pre>