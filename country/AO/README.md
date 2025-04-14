
# ASN-List

实时更新 AO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AO/ASN.AO.yaml"
    path: ./ruleset/ASN.AO.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAO:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AO/ASN.AO.yaml"
    path: ./ruleset/ASN.AO.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AO/CIDR.AO.yaml"
    path: ./ruleset/AOcidr.yaml
</code></pre>