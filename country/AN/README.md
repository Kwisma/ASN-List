
# ASN-List

实时更新 AN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AN/ASN.AN.yaml"
    path: ./ruleset/ASN.AN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAN:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AN/ASN.AN.yaml"
    path: ./ruleset/ASN.AN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ANcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AN/CIDR.AN.yaml"
    path: ./ruleset/ANcidr.yaml
</code></pre>