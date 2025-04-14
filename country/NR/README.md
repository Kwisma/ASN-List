
# ASN-List

实时更新 NR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NR/ASN.NR.yaml"
    path: ./ruleset/ASN.NR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNNR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NR/ASN.NR.yaml"
    path: ./ruleset/ASN.NR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NR/CIDR.NR.yaml"
    path: ./ruleset/NRcidr.yaml
</code></pre>