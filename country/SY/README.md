
# ASN-List

实时更新 SY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SYasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SY/SY_ASN.yaml"
    path: ./ruleset/SY_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SYasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SY/SY_ASN.yaml"
    path: ./ruleset/SY_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SY/SY_IP.yaml"
    path: ./ruleset/SY_IP.yaml
</code></pre>