
# ASN-List

实时更新 TD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TDasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TD/TD_ASN.yaml"
    path: ./ruleset/TD_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TDasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TD/TD_ASN.yaml"
    path: ./ruleset/TD_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TD/TD_IP.yaml"
    path: ./ruleset/TD_IP.yaml
</code></pre>