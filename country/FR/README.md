
# ASN-List

实时更新 FR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  FRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FR/FR_ASN.yaml"
    path: ./ruleset/FR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FR/FR_ASN.yaml"
    path: ./ruleset/FR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FR/FR_IP.yaml"
    path: ./ruleset/FR_IP.yaml
</code></pre>