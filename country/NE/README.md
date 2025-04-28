
# ASN-List

实时更新 NE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NE/NE_ASN.yaml"
    path: ./ruleset/NE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NE/NE_ASN.yaml"
    path: ./ruleset/NE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NE/NE_IP.yaml"
    path: ./ruleset/NE_IP.yaml
</code></pre>