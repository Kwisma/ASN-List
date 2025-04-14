
# ASN-List

实时更新 MK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MK/ASN.MK.yaml"
    path: ./ruleset/ASN.MK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MK/ASN.MK.yaml"
    path: ./ruleset/ASN.MK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MK/CIDR.MK.yaml"
    path: ./ruleset/MKcidr.yaml
</code></pre>