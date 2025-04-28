
# ASN-List

实时更新 IQ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  IQasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IQ/IQ_ASN.yaml"
    path: ./ruleset/IQ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IQasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IQ/IQ_ASN.yaml"
    path: ./ruleset/IQ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IQcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IQ/IQ_IP.yaml"
    path: ./ruleset/IQ_IP.yaml
</code></pre>