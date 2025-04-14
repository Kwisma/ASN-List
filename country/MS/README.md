
# ASN-List

实时更新 MS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MS/ASN.MS.yaml"
    path: ./ruleset/ASN.MS.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMS:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MS/ASN.MS.yaml"
    path: ./ruleset/ASN.MS.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MS/CIDR.MS.yaml"
    path: ./ruleset/MScidr.yaml
</code></pre>