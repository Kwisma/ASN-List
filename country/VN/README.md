
# ASN-List

实时更新 VN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  VNasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VN/VN_ASN.yaml"
    path: ./ruleset/VN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VNasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VN/VN_ASN.yaml"
    path: ./ruleset/VN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VN/VN_IP.yaml"
    path: ./ruleset/VN_IP.yaml
</code></pre>