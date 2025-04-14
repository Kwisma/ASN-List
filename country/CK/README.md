
# ASN-List

实时更新 CK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CK/ASN.CK.yaml"
    path: ./ruleset/ASN.CK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CK/ASN.CK.yaml"
    path: ./ruleset/ASN.CK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CK/CIDR.CK.yaml"
    path: ./ruleset/CKcidr.yaml
</code></pre>