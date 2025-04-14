
# ASN-List

实时更新 PH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPH:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PH/ASN.PH.yaml"
    path: ./ruleset/ASN.PH.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPH:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PH/ASN.PH.yaml"
    path: ./ruleset/ASN.PH.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PH/CIDR.PH.yaml"
    path: ./ruleset/PHcidr.yaml
</code></pre>