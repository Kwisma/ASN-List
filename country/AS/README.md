
# ASN-List

实时更新 AS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AS/ASN.AS.yaml"
    path: ./ruleset/ASN.AS.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAS:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AS/ASN.AS.yaml"
    path: ./ruleset/ASN.AS.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AS/CIDR.AS.yaml"
    path: ./ruleset/AScidr.yaml
</code></pre>