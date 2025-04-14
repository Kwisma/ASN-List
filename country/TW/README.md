
# ASN-List

实时更新 TW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TW/ASN.TW.yaml"
    path: ./ruleset/ASN.TW.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTW:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TW/ASN.TW.yaml"
    path: ./ruleset/ASN.TW.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TW/CIDR.TW.yaml"
    path: ./ruleset/TWcidr.yaml
</code></pre>