
# ASN-List

实时更新 NA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NAasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NA/NA_ASN.yaml"
    path: ./ruleset/NA_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NAasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NA/NA_ASN.yaml"
    path: ./ruleset/NA_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NA/NA_IP.yaml"
    path: ./ruleset/NA_IP.yaml
</code></pre>