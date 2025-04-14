
# ASN-List

实时更新 TH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTH:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TH/ASN.TH.yaml"
    path: ./ruleset/ASN.TH.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTH:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TH/ASN.TH.yaml"
    path: ./ruleset/ASN.TH.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  THcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TH/CIDR.TH.yaml"
    path: ./ruleset/THcidr.yaml
</code></pre>