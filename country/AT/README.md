
# ASN-List

实时更新 AT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAT:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AT/ASN.AT.yaml"
    path: ./ruleset/ASN.AT.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAT:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AT/ASN.AT.yaml"
    path: ./ruleset/ASN.AT.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ATcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AT/CIDR.AT.yaml"
    path: ./ruleset/ATcidr.yaml
</code></pre>