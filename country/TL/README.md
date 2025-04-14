
# ASN-List

实时更新 TL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTL:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TL/ASN.TL.yaml"
    path: ./ruleset/ASN.TL.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTL:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TL/ASN.TL.yaml"
    path: ./ruleset/ASN.TL.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TL/CIDR.TL.yaml"
    path: ./ruleset/TLcidr.yaml
</code></pre>