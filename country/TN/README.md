
# ASN-List

实时更新 TN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TNasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TN/TN_ASN.yaml"
    path: ./ruleset/TN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TNasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TN/TN_ASN.yaml"
    path: ./ruleset/TN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TN/TN_IP.yaml"
    path: ./ruleset/TN_IP.yaml
</code></pre>