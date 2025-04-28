
# ASN-List

实时更新 NG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NG/NG_ASN.yaml"
    path: ./ruleset/NG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NG/NG_ASN.yaml"
    path: ./ruleset/NG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NG/NG_IP.yaml"
    path: ./ruleset/NG_IP.yaml
</code></pre>