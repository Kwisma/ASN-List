
# ASN-List

实时更新 BO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BO/ASN.BO.yaml"
    path: ./ruleset/ASN.BO.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBO:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BO/ASN.BO.yaml"
    path: ./ruleset/ASN.BO.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BO/CIDR.BO.yaml"
    path: ./ruleset/BOcidr.yaml
</code></pre>