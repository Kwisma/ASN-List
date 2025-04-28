
# ASN-List

实时更新 TL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TLasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TL/TL_ASN.yaml"
    path: ./ruleset/TL_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TLasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TL/TL_ASN.yaml"
    path: ./ruleset/TL_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TL/TL_IP.yaml"
    path: ./ruleset/TL_IP.yaml
</code></pre>