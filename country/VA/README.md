
# ASN-List

实时更新 VA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  VAasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VA/VA_ASN.yaml"
    path: ./ruleset/VA_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VAasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VA/VA_ASN.yaml"
    path: ./ruleset/VA_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VA/VA_IP.yaml"
    path: ./ruleset/VA_IP.yaml
</code></pre>