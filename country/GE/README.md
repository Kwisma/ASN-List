
# ASN-List

实时更新 GE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GE/GE_ASN.yaml"
    path: ./ruleset/GE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GE/GE_ASN.yaml"
    path: ./ruleset/GE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GE/GE_IP.yaml"
    path: ./ruleset/GE_IP.yaml
</code></pre>