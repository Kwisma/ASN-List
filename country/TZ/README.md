
# ASN-List

实时更新 TZ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TZasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TZ/TZ_ASN.yaml"
    path: ./ruleset/TZ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TZasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TZ/TZ_ASN.yaml"
    path: ./ruleset/TZ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TZcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TZ/TZ_IP.yaml"
    path: ./ruleset/TZ_IP.yaml
</code></pre>