
# ASN-List

实时更新 DZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNDZ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DZ/ASN.DZ.yaml"
    path: ./ruleset/ASN.DZ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNDZ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DZ/ASN.DZ.yaml"
    path: ./ruleset/ASN.DZ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DZ/CIDR.DZ.yaml"
    path: ./ruleset/DZcidr.yaml
</code></pre>