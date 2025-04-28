
# ASN-List

实时更新 NI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NIasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NI/NI_ASN.yaml"
    path: ./ruleset/NI_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NIasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NI/NI_ASN.yaml"
    path: ./ruleset/NI_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NI/NI_IP.yaml"
    path: ./ruleset/NI_IP.yaml
</code></pre>