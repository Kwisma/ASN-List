
# ASN-List

实时更新 BZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BZ/ASN.BZ.yaml"
    path: ./ruleset/ASN.BZ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBZ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BZ/ASN.BZ.yaml"
    path: ./ruleset/ASN.BZ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BZ/CIDR.BZ.yaml"
    path: ./ruleset/BZcidr.yaml
</code></pre>