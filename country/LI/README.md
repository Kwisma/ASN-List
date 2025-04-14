
# ASN-List

实时更新 LI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LI/ASN.LI.yaml"
    path: ./ruleset/ASN.LI.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLI:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LI/ASN.LI.yaml"
    path: ./ruleset/ASN.LI.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LI/CIDR.LI.yaml"
    path: ./ruleset/LIcidr.yaml
</code></pre>