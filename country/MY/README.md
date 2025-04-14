
# ASN-List

实时更新 MY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMY:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MY/ASN.MY.yaml"
    path: ./ruleset/ASN.MY.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMY:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MY/ASN.MY.yaml"
    path: ./ruleset/ASN.MY.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MY/CIDR.MY.yaml"
    path: ./ruleset/MYcidr.yaml
</code></pre>