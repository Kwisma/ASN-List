
# ASN-List

实时更新 FO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  FOasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FO/FO_ASN.yaml"
    path: ./ruleset/FO_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FOasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FO/FO_ASN.yaml"
    path: ./ruleset/FO_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FO/FO_IP.yaml"
    path: ./ruleset/FO_IP.yaml
</code></pre>