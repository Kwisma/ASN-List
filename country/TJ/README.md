
# ASN-List

实时更新 TJ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TJasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TJ/TJ_ASN.yaml"
    path: ./ruleset/TJ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TJasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TJ/TJ_ASN.yaml"
    path: ./ruleset/TJ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TJcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TJ/TJ_IP.yaml"
    path: ./ruleset/TJ_IP.yaml
</code></pre>