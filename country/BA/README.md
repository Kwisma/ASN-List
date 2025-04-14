
# ASN-List

实时更新 BA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BA/ASN.BA.yaml"
    path: ./ruleset/ASN.BA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BA/ASN.BA.yaml"
    path: ./ruleset/ASN.BA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BA/CIDR.BA.yaml"
    path: ./ruleset/BAcidr.yaml
</code></pre>