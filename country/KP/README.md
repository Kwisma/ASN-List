
# ASN-List

实时更新 KP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  KPasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KP/KP_ASN.yaml"
    path: ./ruleset/KP_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KPasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KP/KP_ASN.yaml"
    path: ./ruleset/KP_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KPcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KP/KP_IP.yaml"
    path: ./ruleset/KP_IP.yaml
</code></pre>