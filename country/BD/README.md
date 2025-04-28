
# ASN-List

实时更新 BD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BDasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BD/BD_ASN.yaml"
    path: ./ruleset/BD_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BDasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BD/BD_ASN.yaml"
    path: ./ruleset/BD_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BD/BD_IP.yaml"
    path: ./ruleset/BD_IP.yaml
</code></pre>