
# ASN-List

实时更新 LA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LAasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LA/LA_ASN.yaml"
    path: ./ruleset/LA_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LAasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LA/LA_ASN.yaml"
    path: ./ruleset/LA_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LA/LA_IP.yaml"
    path: ./ruleset/LA_IP.yaml
</code></pre>