
# ASN-List

实时更新 Microsoft 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMicrosoft:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Microsoft/ASN.Microsoft.yaml"
    path: ./ruleset/ASN.Microsoft.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMicrosoft:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Microsoft/ASN.Microsoft.yaml"
    path: ./ruleset/ASN.Microsoft.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Microsoftcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Microsoft/CIDR.Microsoft.yaml"
    path: ./ruleset/Microsoftcidr.yaml
</code></pre>