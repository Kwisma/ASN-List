
# ASN-List

实时更新 NE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NE/ASN.NE.yaml"
    path: ./ruleset/ASN.NE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNNE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NE/ASN.NE.yaml"
    path: ./ruleset/ASN.NE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NE/CIDR.NE.yaml"
    path: ./ruleset/NEcidr.yaml
</code></pre>