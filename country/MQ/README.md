
# ASN-List

实时更新 MQ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MQasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MQ/MQ_ASN.yaml"
    path: ./ruleset/MQ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MQasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MQ/MQ_ASN.yaml"
    path: ./ruleset/MQ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MQcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MQ/MQ_IP.yaml"
    path: ./ruleset/MQ_IP.yaml
</code></pre>