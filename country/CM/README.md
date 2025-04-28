
# ASN-List

实时更新 CM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CM/CM_ASN.yaml"
    path: ./ruleset/CM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CM/CM_ASN.yaml"
    path: ./ruleset/CM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CM/CM_IP.yaml"
    path: ./ruleset/CM_IP.yaml
</code></pre>