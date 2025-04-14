
# ASN-List

实时更新 PE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PE/ASN.PE.yaml"
    path: ./ruleset/ASN.PE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PE/ASN.PE.yaml"
    path: ./ruleset/ASN.PE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PE/CIDR.PE.yaml"
    path: ./ruleset/PEcidr.yaml
</code></pre>