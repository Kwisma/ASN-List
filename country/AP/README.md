
# ASN-List

实时更新 AP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAP:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AP/ASN.AP.yaml"
    path: ./ruleset/ASN.AP.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAP:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AP/ASN.AP.yaml"
    path: ./ruleset/ASN.AP.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  APcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AP/CIDR.AP.yaml"
    path: ./ruleset/APcidr.yaml
</code></pre>