
# ASN-List

实时更新 VN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNVN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VN/ASN.VN.yaml"
    path: ./ruleset/ASN.VN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNVN:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VN/ASN.VN.yaml"
    path: ./ruleset/ASN.VN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VN/CIDR.VN.yaml"
    path: ./ruleset/VNcidr.yaml
</code></pre>