
# ASN-List

实时更新 AF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  AFasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AF/AF_ASN.yaml"
    path: ./ruleset/AF_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AFasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AF/AF_ASN.yaml"
    path: ./ruleset/AF_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AF/AF_IP.yaml"
    path: ./ruleset/AF_IP.yaml
</code></pre>