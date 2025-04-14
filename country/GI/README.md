
# ASN-List

实时更新 GI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GI/ASN.GI.yaml"
    path: ./ruleset/ASN.GI.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGI:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GI/ASN.GI.yaml"
    path: ./ruleset/ASN.GI.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GI/CIDR.GI.yaml"
    path: ./ruleset/GIcidr.yaml
</code></pre>