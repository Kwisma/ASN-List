
# ASN-List

实时更新 MO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MO/ASN.MO.yaml"
    path: ./ruleset/ASN.MO.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMO:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MO/ASN.MO.yaml"
    path: ./ruleset/ASN.MO.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MO/CIDR.MO.yaml"
    path: ./ruleset/MOcidr.yaml
</code></pre>