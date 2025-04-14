
# ASN-List

实时更新 GH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGH:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GH/ASN.GH.yaml"
    path: ./ruleset/ASN.GH.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGH:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GH/ASN.GH.yaml"
    path: ./ruleset/ASN.GH.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GH/CIDR.GH.yaml"
    path: ./ruleset/GHcidr.yaml
</code></pre>