
# ASN-List

实时更新 BF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BFasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BF/BF_ASN.yaml"
    path: ./ruleset/BF_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BFasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BF/BF_ASN.yaml"
    path: ./ruleset/BF_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BF/BF_IP.yaml"
    path: ./ruleset/BF_IP.yaml
</code></pre>