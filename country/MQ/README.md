
# ASN-List

实时更新 MQ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMQ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MQ/ASN.MQ.yaml"
    path: ./ruleset/ASN.MQ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMQ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MQ/ASN.MQ.yaml"
    path: ./ruleset/ASN.MQ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MQcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MQ/CIDR.MQ.yaml"
    path: ./ruleset/MQcidr.yaml
</code></pre>