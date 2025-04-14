
# ASN-List

实时更新 MH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMH:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MH/ASN.MH.yaml"
    path: ./ruleset/ASN.MH.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMH:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MH/ASN.MH.yaml"
    path: ./ruleset/ASN.MH.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MH/CIDR.MH.yaml"
    path: ./ruleset/MHcidr.yaml
</code></pre>