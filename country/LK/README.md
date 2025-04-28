
# ASN-List

实时更新 LK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LKasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LK/LK_ASN.yaml"
    path: ./ruleset/LK_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LKasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LK/LK_ASN.yaml"
    path: ./ruleset/LK_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LK/LK_IP.yaml"
    path: ./ruleset/LK_IP.yaml
</code></pre>