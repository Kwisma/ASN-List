
# ASN-List

实时更新 GB 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GBasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GB/GB_ASN.yaml"
    path: ./ruleset/GB_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GBasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GB/GB_ASN.yaml"
    path: ./ruleset/GB_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GBcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GB/GB_IP.yaml"
    path: ./ruleset/GB_IP.yaml
</code></pre>