
# ASN-List

实时更新 NF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NFasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NF/NF_ASN.yaml"
    path: ./ruleset/NF_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NFasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NF/NF_ASN.yaml"
    path: ./ruleset/NF_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NF/NF_IP.yaml"
    path: ./ruleset/NF_IP.yaml
</code></pre>