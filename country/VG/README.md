
# ASN-List

实时更新 VG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  VGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VG/VG_ASN.yaml"
    path: ./ruleset/VG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VG/VG_ASN.yaml"
    path: ./ruleset/VG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VG/VG_IP.yaml"
    path: ./ruleset/VG_IP.yaml
</code></pre>