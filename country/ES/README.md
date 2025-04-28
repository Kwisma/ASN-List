
# ASN-List

实时更新 ES 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ESasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ES/ES_ASN.yaml"
    path: ./ruleset/ES_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ESasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ES/ES_ASN.yaml"
    path: ./ruleset/ES_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  EScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ES/ES_IP.yaml"
    path: ./ruleset/ES_IP.yaml
</code></pre>