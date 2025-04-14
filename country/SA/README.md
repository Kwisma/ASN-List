
# ASN-List

实时更新 SA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SA/ASN.SA.yaml"
    path: ./ruleset/ASN.SA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SA/ASN.SA.yaml"
    path: ./ruleset/ASN.SA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SA/CIDR.SA.yaml"
    path: ./ruleset/SAcidr.yaml
</code></pre>