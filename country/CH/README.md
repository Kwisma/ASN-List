
# ASN-List

实时更新 CH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CHasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CH/CH_ASN.yaml"
    path: ./ruleset/CH_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CHasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CH/CH_ASN.yaml"
    path: ./ruleset/CH_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CH/CH_IP.yaml"
    path: ./ruleset/CH_IP.yaml
</code></pre>