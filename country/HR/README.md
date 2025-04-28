
# ASN-List

实时更新 HR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  HRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HR/HR_ASN.yaml"
    path: ./ruleset/HR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HR/HR_ASN.yaml"
    path: ./ruleset/HR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HR/HR_IP.yaml"
    path: ./ruleset/HR_IP.yaml
</code></pre>