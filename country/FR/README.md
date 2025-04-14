
# ASN-List

实时更新 FR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FR/ASN.FR.yaml"
    path: ./ruleset/ASN.FR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNFR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FR/ASN.FR.yaml"
    path: ./ruleset/ASN.FR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FR/CIDR.FR.yaml"
    path: ./ruleset/FRcidr.yaml
</code></pre>