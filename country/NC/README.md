
# ASN-List

实时更新 NC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NCasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NC/NC_ASN.yaml"
    path: ./ruleset/NC_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NCasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NC/NC_ASN.yaml"
    path: ./ruleset/NC_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NC/NC_IP.yaml"
    path: ./ruleset/NC_IP.yaml
</code></pre>