
# ASN-List

实时更新 PE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PE/PE_ASN.yaml"
    path: ./ruleset/PE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PE/PE_ASN.yaml"
    path: ./ruleset/PE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PE/PE_IP.yaml"
    path: ./ruleset/PE_IP.yaml
</code></pre>