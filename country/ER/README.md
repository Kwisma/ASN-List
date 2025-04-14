
# ASN-List

实时更新 ER 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNER:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ER/ASN.ER.yaml"
    path: ./ruleset/ASN.ER.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNER:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ER/ASN.ER.yaml"
    path: ./ruleset/ASN.ER.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ERcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ER/CIDR.ER.yaml"
    path: ./ruleset/ERcidr.yaml
</code></pre>