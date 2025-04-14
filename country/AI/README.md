
# ASN-List

实时更新 AI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AI/ASN.AI.yaml"
    path: ./ruleset/ASN.AI.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAI:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AI/ASN.AI.yaml"
    path: ./ruleset/ASN.AI.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AI/CIDR.AI.yaml"
    path: ./ruleset/AIcidr.yaml
</code></pre>