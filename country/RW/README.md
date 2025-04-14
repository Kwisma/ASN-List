
# ASN-List

实时更新 RW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNRW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RW/ASN.RW.yaml"
    path: ./ruleset/ASN.RW.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNRW:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RW/ASN.RW.yaml"
    path: ./ruleset/ASN.RW.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  RWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RW/CIDR.RW.yaml"
    path: ./ruleset/RWcidr.yaml
</code></pre>