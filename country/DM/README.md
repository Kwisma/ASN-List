
# ASN-List

实时更新 DM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  DMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DM/DM_ASN.yaml"
    path: ./ruleset/DM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DM/DM_ASN.yaml"
    path: ./ruleset/DM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DM/DM_IP.yaml"
    path: ./ruleset/DM_IP.yaml
</code></pre>