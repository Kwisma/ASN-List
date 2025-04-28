
# ASN-List

实时更新 MD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MDasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MD/MD_ASN.yaml"
    path: ./ruleset/MD_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MDasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MD/MD_ASN.yaml"
    path: ./ruleset/MD_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MD/MD_IP.yaml"
    path: ./ruleset/MD_IP.yaml
</code></pre>