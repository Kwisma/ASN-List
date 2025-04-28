
# ASN-List

实时更新 BM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BM/BM_ASN.yaml"
    path: ./ruleset/BM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BM/BM_ASN.yaml"
    path: ./ruleset/BM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BM/BM_IP.yaml"
    path: ./ruleset/BM_IP.yaml
</code></pre>