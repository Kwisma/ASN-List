
# ASN-List

实时更新 CG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CG/CG_ASN.yaml"
    path: ./ruleset/CG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CG/CG_ASN.yaml"
    path: ./ruleset/CG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CG/CG_IP.yaml"
    path: ./ruleset/CG_IP.yaml
</code></pre>