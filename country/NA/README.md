
# ASN-List

实时更新 NA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NA/ASN.NA.yaml"
    path: ./ruleset/ASN.NA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNNA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NA/ASN.NA.yaml"
    path: ./ruleset/ASN.NA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NA/CIDR.NA.yaml"
    path: ./ruleset/NAcidr.yaml
</code></pre>