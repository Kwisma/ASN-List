
# ASN-List

实时更新 AW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AW/ASN.AW.yaml"
    path: ./ruleset/ASN.AW.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAW:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AW/ASN.AW.yaml"
    path: ./ruleset/ASN.AW.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AW/CIDR.AW.yaml"
    path: ./ruleset/AWcidr.yaml
</code></pre>