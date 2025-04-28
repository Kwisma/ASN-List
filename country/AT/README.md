
# ASN-List

实时更新 AT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ATasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AT/AT_ASN.yaml"
    path: ./ruleset/AT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ATasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AT/AT_ASN.yaml"
    path: ./ruleset/AT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ATcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AT/AT_IP.yaml"
    path: ./ruleset/AT_IP.yaml
</code></pre>