
# ASN-List

实时更新 AE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AE/ASN.AE.yaml"
    path: ./ruleset/ASN.AE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AE/ASN.AE.yaml"
    path: ./ruleset/ASN.AE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AE/CIDR.AE.yaml"
    path: ./ruleset/AEcidr.yaml
</code></pre>