
# ASN-List

实时更新 BG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BG/ASN.BG.yaml"
    path: ./ruleset/ASN.BG.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBG:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BG/ASN.BG.yaml"
    path: ./ruleset/ASN.BG.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BG/CIDR.BG.yaml"
    path: ./ruleset/BGcidr.yaml
</code></pre>