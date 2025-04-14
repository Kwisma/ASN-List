
# ASN-List

实时更新 DJ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNDJ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DJ/ASN.DJ.yaml"
    path: ./ruleset/ASN.DJ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNDJ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DJ/ASN.DJ.yaml"
    path: ./ruleset/ASN.DJ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DJcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DJ/CIDR.DJ.yaml"
    path: ./ruleset/DJcidr.yaml
</code></pre>