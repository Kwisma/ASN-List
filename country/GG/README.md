
# ASN-List

实时更新 GG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GG/GG_ASN.yaml"
    path: ./ruleset/GG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GG/GG_ASN.yaml"
    path: ./ruleset/GG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GG/GG_IP.yaml"
    path: ./ruleset/GG_IP.yaml
</code></pre>