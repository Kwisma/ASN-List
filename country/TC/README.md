
# ASN-List

实时更新 TC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TCasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TC/TC_ASN.yaml"
    path: ./ruleset/TC_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TCasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TC/TC_ASN.yaml"
    path: ./ruleset/TC_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TC/TC_IP.yaml"
    path: ./ruleset/TC_IP.yaml
</code></pre>