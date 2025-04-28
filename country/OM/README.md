
# ASN-List

实时更新 OM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  OMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/OM/OM_ASN.yaml"
    path: ./ruleset/OM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  OMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/OM/OM_ASN.yaml"
    path: ./ruleset/OM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  OMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/OM/OM_IP.yaml"
    path: ./ruleset/OM_IP.yaml
</code></pre>