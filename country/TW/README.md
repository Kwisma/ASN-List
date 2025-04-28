
# ASN-List

实时更新 TW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TWasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TW/TW_ASN.yaml"
    path: ./ruleset/TW_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TWasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TW/TW_ASN.yaml"
    path: ./ruleset/TW_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TW/TW_IP.yaml"
    path: ./ruleset/TW_IP.yaml
</code></pre>