
# ASN-List

实时更新 SK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SKasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SK/SK_ASN.yaml"
    path: ./ruleset/SK_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SKasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SK/SK_ASN.yaml"
    path: ./ruleset/SK_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SK/SK_IP.yaml"
    path: ./ruleset/SK_IP.yaml
</code></pre>