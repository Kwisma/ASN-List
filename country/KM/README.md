
# ASN-List

实时更新 KM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KM/ASN.KM.yaml"
    path: ./ruleset/ASN.KM.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKM:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KM/ASN.KM.yaml"
    path: ./ruleset/ASN.KM.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KM/CIDR.KM.yaml"
    path: ./ruleset/KMcidr.yaml
</code></pre>