
# ASN-List

实时更新 NO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NOasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NO/NO_ASN.yaml"
    path: ./ruleset/NO_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NOasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NO/NO_ASN.yaml"
    path: ./ruleset/NO_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NO/NO_IP.yaml"
    path: ./ruleset/NO_IP.yaml
</code></pre>