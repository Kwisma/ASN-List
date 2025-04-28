
# ASN-List

实时更新 GU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GU/GU_ASN.yaml"
    path: ./ruleset/GU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GU/GU_ASN.yaml"
    path: ./ruleset/GU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GU/GU_IP.yaml"
    path: ./ruleset/GU_IP.yaml
</code></pre>