
# ASN-List

实时更新 WS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  WSasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/WS/WS_ASN.yaml"
    path: ./ruleset/WS_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  WSasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/WS/WS_ASN.yaml"
    path: ./ruleset/WS_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  WScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/WS/WS_IP.yaml"
    path: ./ruleset/WS_IP.yaml
</code></pre>