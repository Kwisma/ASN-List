
# ASN-List

实时更新 JP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  JPasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/JP/JP_ASN.yaml"
    path: ./ruleset/JP_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  JPasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JP/JP_ASN.yaml"
    path: ./ruleset/JP_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  JPcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JP/JP_IP.yaml"
    path: ./ruleset/JP_IP.yaml
</code></pre>