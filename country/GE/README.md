
# ASN-List

实时更新 GE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GE/ASN.GE.yaml"
    path: ./ruleset/ASN.GE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GE/ASN.GE.yaml"
    path: ./ruleset/ASN.GE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GE/CIDR.GE.yaml"
    path: ./ruleset/GEcidr.yaml
</code></pre>