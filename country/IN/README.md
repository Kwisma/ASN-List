
# ASN-List

实时更新 IN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  INasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IN/IN_ASN.yaml"
    path: ./ruleset/IN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  INasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IN/IN_ASN.yaml"
    path: ./ruleset/IN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  INcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IN/IN_IP.yaml"
    path: ./ruleset/IN_IP.yaml
</code></pre>