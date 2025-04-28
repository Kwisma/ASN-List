
# ASN-List

实时更新 AX 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  AXasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AX/AX_ASN.yaml"
    path: ./ruleset/AX_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AXasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AX/AX_ASN.yaml"
    path: ./ruleset/AX_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AXcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AX/AX_IP.yaml"
    path: ./ruleset/AX_IP.yaml
</code></pre>