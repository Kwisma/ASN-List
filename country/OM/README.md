
# ASN-List

实时更新 OM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNOM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/OM/ASN.OM.yaml"
    path: ./ruleset/ASN.OM.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNOM:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/OM/ASN.OM.yaml"
    path: ./ruleset/ASN.OM.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  OMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/OM/CIDR.OM.yaml"
    path: ./ruleset/OMcidr.yaml
</code></pre>