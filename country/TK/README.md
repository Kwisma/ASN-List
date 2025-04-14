
# ASN-List

实时更新 TK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TK/ASN.TK.yaml"
    path: ./ruleset/ASN.TK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TK/ASN.TK.yaml"
    path: ./ruleset/ASN.TK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TK/CIDR.TK.yaml"
    path: ./ruleset/TKcidr.yaml
</code></pre>