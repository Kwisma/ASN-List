
# ASN-List

实时更新 EE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNEE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/EE/ASN.EE.yaml"
    path: ./ruleset/ASN.EE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNEE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EE/ASN.EE.yaml"
    path: ./ruleset/ASN.EE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  EEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EE/CIDR.EE.yaml"
    path: ./ruleset/EEcidr.yaml
</code></pre>