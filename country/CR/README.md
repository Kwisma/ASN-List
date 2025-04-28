
# ASN-List

实时更新 CR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CR/CR_ASN.yaml"
    path: ./ruleset/CR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CR/CR_ASN.yaml"
    path: ./ruleset/CR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CR/CR_IP.yaml"
    path: ./ruleset/CR_IP.yaml
</code></pre>