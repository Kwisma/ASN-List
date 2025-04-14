
# ASN-List

实时更新 VU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNVU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VU/ASN.VU.yaml"
    path: ./ruleset/ASN.VU.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNVU:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VU/ASN.VU.yaml"
    path: ./ruleset/ASN.VU.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VU/CIDR.VU.yaml"
    path: ./ruleset/VUcidr.yaml
</code></pre>