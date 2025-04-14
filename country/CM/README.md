
# ASN-List

实时更新 CM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CM/ASN.CM.yaml"
    path: ./ruleset/ASN.CM.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCM:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CM/ASN.CM.yaml"
    path: ./ruleset/ASN.CM.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CM/CIDR.CM.yaml"
    path: ./ruleset/CMcidr.yaml
</code></pre>