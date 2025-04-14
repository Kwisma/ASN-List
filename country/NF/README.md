
# ASN-List

实时更新 NF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NF/ASN.NF.yaml"
    path: ./ruleset/ASN.NF.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNNF:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NF/ASN.NF.yaml"
    path: ./ruleset/ASN.NF.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NF/CIDR.NF.yaml"
    path: ./ruleset/NFcidr.yaml
</code></pre>