
# ASN-List

实时更新 GM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GM/GM_ASN.yaml"
    path: ./ruleset/GM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GM/GM_ASN.yaml"
    path: ./ruleset/GM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GM/GM_IP.yaml"
    path: ./ruleset/GM_IP.yaml
</code></pre>