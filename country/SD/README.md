
# ASN-List

实时更新 SD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SDasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SD/SD_ASN.yaml"
    path: ./ruleset/SD_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SDasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SD/SD_ASN.yaml"
    path: ./ruleset/SD_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SD/SD_IP.yaml"
    path: ./ruleset/SD_IP.yaml
</code></pre>