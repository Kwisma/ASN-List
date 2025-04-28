
# ASN-List

实时更新 VU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  VUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VU/VU_ASN.yaml"
    path: ./ruleset/VU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VU/VU_ASN.yaml"
    path: ./ruleset/VU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VU/VU_IP.yaml"
    path: ./ruleset/VU_IP.yaml
</code></pre>