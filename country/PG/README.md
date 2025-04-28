
# ASN-List

实时更新 PG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PG/PG_ASN.yaml"
    path: ./ruleset/PG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PG/PG_ASN.yaml"
    path: ./ruleset/PG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PG/PG_IP.yaml"
    path: ./ruleset/PG_IP.yaml
</code></pre>