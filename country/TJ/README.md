
# ASN-List

实时更新 TJ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTJ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TJ/ASN.TJ.yaml"
    path: ./ruleset/ASN.TJ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTJ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TJ/ASN.TJ.yaml"
    path: ./ruleset/ASN.TJ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TJcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TJ/CIDR.TJ.yaml"
    path: ./ruleset/TJcidr.yaml
</code></pre>