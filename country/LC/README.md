
# ASN-List

实时更新 LC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLC:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LC/ASN.LC.yaml"
    path: ./ruleset/ASN.LC.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLC:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LC/ASN.LC.yaml"
    path: ./ruleset/ASN.LC.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LC/CIDR.LC.yaml"
    path: ./ruleset/LCcidr.yaml
</code></pre>