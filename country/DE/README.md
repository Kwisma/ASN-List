
# ASN-List

实时更新 DE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  DEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DE/DE_ASN.yaml"
    path: ./ruleset/DE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DE/DE_ASN.yaml"
    path: ./ruleset/DE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DE/DE_IP.yaml"
    path: ./ruleset/DE_IP.yaml
</code></pre>