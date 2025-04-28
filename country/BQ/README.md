
# ASN-List

实时更新 BQ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BQasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BQ/BQ_ASN.yaml"
    path: ./ruleset/BQ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BQasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BQ/BQ_ASN.yaml"
    path: ./ruleset/BQ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BQcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BQ/BQ_IP.yaml"
    path: ./ruleset/BQ_IP.yaml
</code></pre>