
# ASN-List

实时更新 VE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNVE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VE/ASN.VE.yaml"
    path: ./ruleset/ASN.VE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNVE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VE/ASN.VE.yaml"
    path: ./ruleset/ASN.VE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VE/CIDR.VE.yaml"
    path: ./ruleset/VEcidr.yaml
</code></pre>