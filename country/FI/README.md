
# ASN-List

实时更新 FI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FI/ASN.FI.yaml"
    path: ./ruleset/ASN.FI.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNFI:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FI/ASN.FI.yaml"
    path: ./ruleset/ASN.FI.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FI/CIDR.FI.yaml"
    path: ./ruleset/FIcidr.yaml
</code></pre>