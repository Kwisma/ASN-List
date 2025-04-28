
# ASN-List

实时更新 GQ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GQasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GQ/GQ_ASN.yaml"
    path: ./ruleset/GQ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GQasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GQ/GQ_ASN.yaml"
    path: ./ruleset/GQ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GQcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GQ/GQ_IP.yaml"
    path: ./ruleset/GQ_IP.yaml
</code></pre>