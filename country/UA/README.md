
# ASN-List

实时更新 UA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNUA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UA/ASN.UA.yaml"
    path: ./ruleset/ASN.UA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNUA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UA/ASN.UA.yaml"
    path: ./ruleset/ASN.UA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UA/CIDR.UA.yaml"
    path: ./ruleset/UAcidr.yaml
</code></pre>