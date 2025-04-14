
# ASN-List

实时更新 ST 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNST:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ST/ASN.ST.yaml"
    path: ./ruleset/ASN.ST.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNST:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ST/ASN.ST.yaml"
    path: ./ruleset/ASN.ST.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  STcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ST/CIDR.ST.yaml"
    path: ./ruleset/STcidr.yaml
</code></pre>