
# ASN-List

实时更新 BY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BY/ASN.BY.yaml"
    path: ./ruleset/ASN.BY.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBY:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BY/ASN.BY.yaml"
    path: ./ruleset/ASN.BY.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BY/CIDR.BY.yaml"
    path: ./ruleset/BYcidr.yaml
</code></pre>