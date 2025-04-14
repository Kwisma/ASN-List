
# ASN-List

实时更新 SB 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSB:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SB/ASN.SB.yaml"
    path: ./ruleset/ASN.SB.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSB:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SB/ASN.SB.yaml"
    path: ./ruleset/ASN.SB.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SBcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SB/CIDR.SB.yaml"
    path: ./ruleset/SBcidr.yaml
</code></pre>