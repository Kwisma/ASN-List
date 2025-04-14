
# ASN-List

实时更新 TV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTV:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TV/ASN.TV.yaml"
    path: ./ruleset/ASN.TV.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTV:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TV/ASN.TV.yaml"
    path: ./ruleset/ASN.TV.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TVcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TV/CIDR.TV.yaml"
    path: ./ruleset/TVcidr.yaml
</code></pre>