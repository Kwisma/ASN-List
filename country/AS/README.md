
# ASN-List

实时更新 AS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AS/AS_ASN.yaml"
    path: ./ruleset/AS_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AS/AS_ASN.yaml"
    path: ./ruleset/AS_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AS/AS_IP.yaml"
    path: ./ruleset/AS_IP.yaml
</code></pre>