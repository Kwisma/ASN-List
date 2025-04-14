
# ASN-List

实时更新 KP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKP:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KP/ASN.KP.yaml"
    path: ./ruleset/ASN.KP.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKP:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KP/ASN.KP.yaml"
    path: ./ruleset/ASN.KP.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KPcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KP/CIDR.KP.yaml"
    path: ./ruleset/KPcidr.yaml
</code></pre>