
# ASN-List

实时更新 IS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IS/ASN.IS.yaml"
    path: ./ruleset/ASN.IS.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNIS:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IS/ASN.IS.yaml"
    path: ./ruleset/ASN.IS.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IS/CIDR.IS.yaml"
    path: ./ruleset/IScidr.yaml
</code></pre>