
# ASN-List

实时更新 KH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKH:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KH/ASN.KH.yaml"
    path: ./ruleset/ASN.KH.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKH:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KH/ASN.KH.yaml"
    path: ./ruleset/ASN.KH.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KH/CIDR.KH.yaml"
    path: ./ruleset/KHcidr.yaml
</code></pre>