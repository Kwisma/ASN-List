
# ASN-List

实时更新 CH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCH:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CH/ASN.CH.yaml"
    path: ./ruleset/ASN.CH.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCH:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CH/ASN.CH.yaml"
    path: ./ruleset/ASN.CH.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CH/CIDR.CH.yaml"
    path: ./ruleset/CHcidr.yaml
</code></pre>