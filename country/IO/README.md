
# ASN-List

实时更新 IO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IO/ASN.IO.yaml"
    path: ./ruleset/ASN.IO.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNIO:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IO/ASN.IO.yaml"
    path: ./ruleset/ASN.IO.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IO/CIDR.IO.yaml"
    path: ./ruleset/IOcidr.yaml
</code></pre>