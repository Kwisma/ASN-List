
# ASN-List

实时更新 KN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  KNasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KN/KN_ASN.yaml"
    path: ./ruleset/KN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KNasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KN/KN_ASN.yaml"
    path: ./ruleset/KN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KN/KN_IP.yaml"
    path: ./ruleset/KN_IP.yaml
</code></pre>