
# ASN-List

实时更新 Alibaba 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Alibabaasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Alibaba/Alibaba_ASN.yaml"
    path: ./ruleset/Alibaba_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Alibabaasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Alibaba/Alibaba_ASN.yaml"
    path: ./ruleset/Alibaba_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Alibabacidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Alibaba/Alibaba_IP.yaml"
    path: ./ruleset/Alibaba_IP.yaml
</code></pre>