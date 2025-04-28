
# ASN-List

实时更新 TT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TTasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TT/TT_ASN.yaml"
    path: ./ruleset/TT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TTasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TT/TT_ASN.yaml"
    path: ./ruleset/TT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TT/TT_IP.yaml"
    path: ./ruleset/TT_IP.yaml
</code></pre>