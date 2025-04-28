
# ASN-List

实时更新 JM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  JMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/JM/JM_ASN.yaml"
    path: ./ruleset/JM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  JMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JM/JM_ASN.yaml"
    path: ./ruleset/JM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  JMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JM/JM_IP.yaml"
    path: ./ruleset/JM_IP.yaml
</code></pre>