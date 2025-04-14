
# ASN-List

实时更新 ML 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNML:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ML/ASN.ML.yaml"
    path: ./ruleset/ASN.ML.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNML:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ML/ASN.ML.yaml"
    path: ./ruleset/ASN.ML.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ML/CIDR.ML.yaml"
    path: ./ruleset/MLcidr.yaml
</code></pre>