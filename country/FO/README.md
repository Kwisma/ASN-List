
# ASN-List

实时更新 FO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FO/ASN.FO.yaml"
    path: ./ruleset/ASN.FO.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNFO:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FO/ASN.FO.yaml"
    path: ./ruleset/ASN.FO.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FO/CIDR.FO.yaml"
    path: ./ruleset/FOcidr.yaml
</code></pre>