
# ASN-List

实时更新 CR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CR/ASN.CR.yaml"
    path: ./ruleset/ASN.CR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CR/ASN.CR.yaml"
    path: ./ruleset/ASN.CR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CR/CIDR.CR.yaml"
    path: ./ruleset/CRcidr.yaml
</code></pre>