
# ASN-List

实时更新 BH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBH:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BH/ASN.BH.yaml"
    path: ./ruleset/ASN.BH.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBH:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BH/ASN.BH.yaml"
    path: ./ruleset/ASN.BH.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BH/CIDR.BH.yaml"
    path: ./ruleset/BHcidr.yaml
</code></pre>