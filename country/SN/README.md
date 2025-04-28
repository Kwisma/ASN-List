
# ASN-List

实时更新 SN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SNasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SN/SN_ASN.yaml"
    path: ./ruleset/SN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SNasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SN/SN_ASN.yaml"
    path: ./ruleset/SN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SN/SN_IP.yaml"
    path: ./ruleset/SN_IP.yaml
</code></pre>