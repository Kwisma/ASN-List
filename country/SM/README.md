
# ASN-List

实时更新 SM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SM/SM_ASN.yaml"
    path: ./ruleset/SM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SM/SM_ASN.yaml"
    path: ./ruleset/SM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SM/SM_IP.yaml"
    path: ./ruleset/SM_IP.yaml
</code></pre>