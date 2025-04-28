
# ASN-List

实时更新 LI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LIasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LI/LI_ASN.yaml"
    path: ./ruleset/LI_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LIasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LI/LI_ASN.yaml"
    path: ./ruleset/LI_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LI/LI_IP.yaml"
    path: ./ruleset/LI_IP.yaml
</code></pre>