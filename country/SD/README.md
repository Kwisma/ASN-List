
# ASN-List

实时更新 SD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSD:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SD/ASN.SD.yaml"
    path: ./ruleset/ASN.SD.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSD:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SD/ASN.SD.yaml"
    path: ./ruleset/ASN.SD.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SD/CIDR.SD.yaml"
    path: ./ruleset/SDcidr.yaml
</code></pre>