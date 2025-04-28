
# ASN-List

实时更新 UA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  UAasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/UA/UA_ASN.yaml"
    path: ./ruleset/UA_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UAasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UA/UA_ASN.yaml"
    path: ./ruleset/UA_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/UA/UA_IP.yaml"
    path: ./ruleset/UA_IP.yaml
</code></pre>