
# ASN-List

实时更新 LR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LR/ASN.LR.yaml"
    path: ./ruleset/ASN.LR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LR/ASN.LR.yaml"
    path: ./ruleset/ASN.LR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LR/CIDR.LR.yaml"
    path: ./ruleset/LRcidr.yaml
</code></pre>