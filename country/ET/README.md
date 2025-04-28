
# ASN-List

实时更新 ET 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ETasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ET/ET_ASN.yaml"
    path: ./ruleset/ET_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ETasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ET/ET_ASN.yaml"
    path: ./ruleset/ET_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ETcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ET/ET_IP.yaml"
    path: ./ruleset/ET_IP.yaml
</code></pre>