
# ASN-List

实时更新 KH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  KHasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KH/KH_ASN.yaml"
    path: ./ruleset/KH_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KHasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KH/KH_ASN.yaml"
    path: ./ruleset/KH_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KH/KH_IP.yaml"
    path: ./ruleset/KH_IP.yaml
</code></pre>