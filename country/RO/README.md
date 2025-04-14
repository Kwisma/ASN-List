
# ASN-List

实时更新 RO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNRO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RO/ASN.RO.yaml"
    path: ./ruleset/ASN.RO.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNRO:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RO/ASN.RO.yaml"
    path: ./ruleset/ASN.RO.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ROcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RO/CIDR.RO.yaml"
    path: ./ruleset/ROcidr.yaml
</code></pre>