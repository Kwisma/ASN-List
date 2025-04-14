
# ASN-List

实时更新 HR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNHR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HR/ASN.HR.yaml"
    path: ./ruleset/ASN.HR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNHR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HR/ASN.HR.yaml"
    path: ./ruleset/ASN.HR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HR/CIDR.HR.yaml"
    path: ./ruleset/HRcidr.yaml
</code></pre>