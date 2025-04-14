
# ASN-List

实时更新 SN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSN:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SN/ASN.SN.yaml"
    path: ./ruleset/ASN.SN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSN:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SN/ASN.SN.yaml"
    path: ./ruleset/ASN.SN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SN/CIDR.SN.yaml"
    path: ./ruleset/SNcidr.yaml
</code></pre>