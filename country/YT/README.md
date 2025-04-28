
# ASN-List

实时更新 YT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  YTasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/YT/YT_ASN.yaml"
    path: ./ruleset/YT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  YTasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/YT/YT_ASN.yaml"
    path: ./ruleset/YT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  YTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/YT/YT_IP.yaml"
    path: ./ruleset/YT_IP.yaml
</code></pre>