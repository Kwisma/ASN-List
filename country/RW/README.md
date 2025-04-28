
# ASN-List

实时更新 RW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  RWasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RW/RW_ASN.yaml"
    path: ./ruleset/RW_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  RWasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RW/RW_ASN.yaml"
    path: ./ruleset/RW_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  RWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RW/RW_IP.yaml"
    path: ./ruleset/RW_IP.yaml
</code></pre>