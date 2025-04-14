
# ASN-List

实时更新 BM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BM/ASN.BM.yaml"
    path: ./ruleset/ASN.BM.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBM:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BM/ASN.BM.yaml"
    path: ./ruleset/ASN.BM.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BM/CIDR.BM.yaml"
    path: ./ruleset/BMcidr.yaml
</code></pre>