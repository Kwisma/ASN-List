
# ASN-List

实时更新 KI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KI/ASN.KI.yaml"
    path: ./ruleset/ASN.KI.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKI:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KI/ASN.KI.yaml"
    path: ./ruleset/ASN.KI.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KI/CIDR.KI.yaml"
    path: ./ruleset/KIcidr.yaml
</code></pre>