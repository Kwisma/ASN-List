
# ASN-List

实时更新 BE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BE/ASN.BE.yaml"
    path: ./ruleset/ASN.BE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BE/ASN.BE.yaml"
    path: ./ruleset/ASN.BE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BE/CIDR.BE.yaml"
    path: ./ruleset/BEcidr.yaml
</code></pre>