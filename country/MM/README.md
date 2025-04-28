
# ASN-List

实时更新 MM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MM/MM_ASN.yaml"
    path: ./ruleset/MM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MM/MM_ASN.yaml"
    path: ./ruleset/MM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MM/MM_IP.yaml"
    path: ./ruleset/MM_IP.yaml
</code></pre>