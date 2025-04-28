
# ASN-List

实时更新 EE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  EEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/EE/EE_ASN.yaml"
    path: ./ruleset/EE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  EEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EE/EE_ASN.yaml"
    path: ./ruleset/EE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  EEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/EE/EE_IP.yaml"
    path: ./ruleset/EE_IP.yaml
</code></pre>