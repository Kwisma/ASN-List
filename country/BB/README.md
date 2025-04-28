
# ASN-List

实时更新 BB 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BBasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BB/BB_ASN.yaml"
    path: ./ruleset/BB_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BBasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BB/BB_ASN.yaml"
    path: ./ruleset/BB_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BBcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BB/BB_IP.yaml"
    path: ./ruleset/BB_IP.yaml
</code></pre>