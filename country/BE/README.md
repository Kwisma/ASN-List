
# ASN-List

实时更新 BE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BE/BE_ASN.yaml"
    path: ./ruleset/BE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BE/BE_ASN.yaml"
    path: ./ruleset/BE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BE/BE_IP.yaml"
    path: ./ruleset/BE_IP.yaml
</code></pre>