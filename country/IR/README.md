
# ASN-List

实时更新 IR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  IRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IR/IR_ASN.yaml"
    path: ./ruleset/IR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IR/IR_ASN.yaml"
    path: ./ruleset/IR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IR/IR_IP.yaml"
    path: ./ruleset/IR_IP.yaml
</code></pre>