
# ASN-List

实时更新 ID 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNID:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ID/ASN.ID.yaml"
    path: ./ruleset/ASN.ID.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNID:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ID/ASN.ID.yaml"
    path: ./ruleset/ASN.ID.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ID/CIDR.ID.yaml"
    path: ./ruleset/IDcidr.yaml
</code></pre>