
# ASN-List

实时更新 SS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SSasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SS/SS_ASN.yaml"
    path: ./ruleset/SS_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SSasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SS/SS_ASN.yaml"
    path: ./ruleset/SS_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SS/SS_IP.yaml"
    path: ./ruleset/SS_IP.yaml
</code></pre>