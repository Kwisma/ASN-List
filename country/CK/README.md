
# ASN-List

实时更新 CK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CKasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CK/CK_ASN.yaml"
    path: ./ruleset/CK_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CKasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CK/CK_ASN.yaml"
    path: ./ruleset/CK_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CK/CK_IP.yaml"
    path: ./ruleset/CK_IP.yaml
</code></pre>