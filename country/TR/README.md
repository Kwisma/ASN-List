
# ASN-List

实时更新 TR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TR/TR_ASN.yaml"
    path: ./ruleset/TR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TR/TR_ASN.yaml"
    path: ./ruleset/TR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TR/TR_IP.yaml"
    path: ./ruleset/TR_IP.yaml
</code></pre>