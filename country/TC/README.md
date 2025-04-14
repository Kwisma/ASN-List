
# ASN-List

实时更新 TC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTC:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TC/ASN.TC.yaml"
    path: ./ruleset/ASN.TC.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTC:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TC/ASN.TC.yaml"
    path: ./ruleset/ASN.TC.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TC/CIDR.TC.yaml"
    path: ./ruleset/TCcidr.yaml
</code></pre>