
# ASN-List

实时更新 ER 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ERasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ER/ER_ASN.yaml"
    path: ./ruleset/ER_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ERasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ER/ER_ASN.yaml"
    path: ./ruleset/ER_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ERcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ER/ER_IP.yaml"
    path: ./ruleset/ER_IP.yaml
</code></pre>