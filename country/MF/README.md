
# ASN-List

实时更新 MF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MF/ASN.MF.yaml"
    path: ./ruleset/ASN.MF.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMF:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MF/ASN.MF.yaml"
    path: ./ruleset/ASN.MF.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MF/CIDR.MF.yaml"
    path: ./ruleset/MFcidr.yaml
</code></pre>