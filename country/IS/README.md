
# ASN-List

实时更新 IS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ISasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IS/IS_ASN.yaml"
    path: ./ruleset/IS_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ISasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IS/IS_ASN.yaml"
    path: ./ruleset/IS_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IS/IS_IP.yaml"
    path: ./ruleset/IS_IP.yaml
</code></pre>