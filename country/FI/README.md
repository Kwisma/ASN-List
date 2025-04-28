
# ASN-List

实时更新 FI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  FIasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FI/FI_ASN.yaml"
    path: ./ruleset/FI_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FIasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FI/FI_ASN.yaml"
    path: ./ruleset/FI_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FI/FI_IP.yaml"
    path: ./ruleset/FI_IP.yaml
</code></pre>