
# ASN-List

实时更新 MF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MFasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MF/MF_ASN.yaml"
    path: ./ruleset/MF_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MFasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MF/MF_ASN.yaml"
    path: ./ruleset/MF_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MF/MF_IP.yaml"
    path: ./ruleset/MF_IP.yaml
</code></pre>