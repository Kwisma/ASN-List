
# ASN-List

实时更新 VI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNVI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VI/ASN.VI.yaml"
    path: ./ruleset/ASN.VI.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNVI:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VI/ASN.VI.yaml"
    path: ./ruleset/ASN.VI.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VI/CIDR.VI.yaml"
    path: ./ruleset/VIcidr.yaml
</code></pre>