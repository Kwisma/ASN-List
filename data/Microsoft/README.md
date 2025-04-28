
# ASN-List

实时更新 Microsoft 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Microsoftasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Microsoft/Microsoft_ASN.yaml"
    path: ./ruleset/Microsoft_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Microsoftasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Microsoft/Microsoft_ASN.yaml"
    path: ./ruleset/Microsoft_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Microsoftcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Microsoft/Microsoft_IP.yaml"
    path: ./ruleset/Microsoft_IP.yaml
</code></pre>