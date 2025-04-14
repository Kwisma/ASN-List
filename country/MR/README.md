
# ASN-List

实时更新 MR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MR/ASN.MR.yaml"
    path: ./ruleset/ASN.MR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MR/ASN.MR.yaml"
    path: ./ruleset/ASN.MR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MR/CIDR.MR.yaml"
    path: ./ruleset/MRcidr.yaml
</code></pre>