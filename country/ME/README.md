
# ASN-List

实时更新 ME 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ME/ME_ASN.yaml"
    path: ./ruleset/ME_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ME/ME_ASN.yaml"
    path: ./ruleset/ME_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ME/ME_IP.yaml"
    path: ./ruleset/ME_IP.yaml
</code></pre>