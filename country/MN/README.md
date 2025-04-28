
# ASN-List

实时更新 MN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MNasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MN/MN_ASN.yaml"
    path: ./ruleset/MN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MNasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MN/MN_ASN.yaml"
    path: ./ruleset/MN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MN/MN_IP.yaml"
    path: ./ruleset/MN_IP.yaml
</code></pre>