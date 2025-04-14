
# ASN-List

实时更新 NI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NI/ASN.NI.yaml"
    path: ./ruleset/ASN.NI.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNNI:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NI/ASN.NI.yaml"
    path: ./ruleset/ASN.NI.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NI/CIDR.NI.yaml"
    path: ./ruleset/NIcidr.yaml
</code></pre>