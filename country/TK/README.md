
# ASN-List

实时更新 TK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TKasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TK/TK_ASN.yaml"
    path: ./ruleset/TK_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TKasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TK/TK_ASN.yaml"
    path: ./ruleset/TK_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TK/TK_IP.yaml"
    path: ./ruleset/TK_IP.yaml
</code></pre>