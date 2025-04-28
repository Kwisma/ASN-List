
# ASN-List

实时更新 SG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SG/SG_ASN.yaml"
    path: ./ruleset/SG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SG/SG_ASN.yaml"
    path: ./ruleset/SG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SG/SG_IP.yaml"
    path: ./ruleset/SG_IP.yaml
</code></pre>