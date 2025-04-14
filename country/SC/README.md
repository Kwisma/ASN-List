
# ASN-List

实时更新 SC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSC:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SC/ASN.SC.yaml"
    path: ./ruleset/ASN.SC.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSC:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SC/ASN.SC.yaml"
    path: ./ruleset/ASN.SC.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SC/CIDR.SC.yaml"
    path: ./ruleset/SCcidr.yaml
</code></pre>