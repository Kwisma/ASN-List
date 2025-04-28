
# ASN-List

实时更新 MG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MG/MG_ASN.yaml"
    path: ./ruleset/MG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MG/MG_ASN.yaml"
    path: ./ruleset/MG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MG/MG_IP.yaml"
    path: ./ruleset/MG_IP.yaml
</code></pre>