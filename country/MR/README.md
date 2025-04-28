
# ASN-List

实时更新 MR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MR/MR_ASN.yaml"
    path: ./ruleset/MR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MR/MR_ASN.yaml"
    path: ./ruleset/MR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MR/MR_IP.yaml"
    path: ./ruleset/MR_IP.yaml
</code></pre>