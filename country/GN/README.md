
# ASN-List

实时更新 GN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GNasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GN/GN_ASN.yaml"
    path: ./ruleset/GN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GNasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GN/GN_ASN.yaml"
    path: ./ruleset/GN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GN/GN_IP.yaml"
    path: ./ruleset/GN_IP.yaml
</code></pre>