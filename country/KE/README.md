
# ASN-List

实时更新 KE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KE/ASN.KE.yaml"
    path: ./ruleset/ASN.KE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KE/ASN.KE.yaml"
    path: ./ruleset/ASN.KE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KE/CIDR.KE.yaml"
    path: ./ruleset/KEcidr.yaml
</code></pre>