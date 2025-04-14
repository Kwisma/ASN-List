
# ASN-List

实时更新 MD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMD:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MD/ASN.MD.yaml"
    path: ./ruleset/ASN.MD.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMD:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MD/ASN.MD.yaml"
    path: ./ruleset/ASN.MD.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MD/CIDR.MD.yaml"
    path: ./ruleset/MDcidr.yaml
</code></pre>