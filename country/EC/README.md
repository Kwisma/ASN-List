
# ASN-List

实时更新 EC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ECasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/EC/EC_ASN.yaml"
    path: ./ruleset/EC_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ECasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EC/EC_ASN.yaml"
    path: ./ruleset/EC_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ECcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EC/EC_IP.yaml"
    path: ./ruleset/EC_IP.yaml
</code></pre>