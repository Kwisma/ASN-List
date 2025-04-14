
# ASN-List

实时更新 TM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TM/ASN.TM.yaml"
    path: ./ruleset/ASN.TM.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTM:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TM/ASN.TM.yaml"
    path: ./ruleset/ASN.TM.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TM/CIDR.TM.yaml"
    path: ./ruleset/TMcidr.yaml
</code></pre>