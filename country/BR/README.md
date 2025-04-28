
# ASN-List

实时更新 BR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BR/BR_ASN.yaml"
    path: ./ruleset/BR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BR/BR_ASN.yaml"
    path: ./ruleset/BR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BR/BR_IP.yaml"
    path: ./ruleset/BR_IP.yaml
</code></pre>