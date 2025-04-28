
# ASN-List

实时更新 IT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ITasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IT/IT_ASN.yaml"
    path: ./ruleset/IT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ITasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IT/IT_ASN.yaml"
    path: ./ruleset/IT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ITcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IT/IT_IP.yaml"
    path: ./ruleset/IT_IP.yaml
</code></pre>