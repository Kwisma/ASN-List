
# ASN-List

实时更新 HU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  HUasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HU/HU_ASN.yaml"
    path: ./ruleset/HU_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HUasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HU/HU_ASN.yaml"
    path: ./ruleset/HU_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HU/HU_IP.yaml"
    path: ./ruleset/HU_IP.yaml
</code></pre>