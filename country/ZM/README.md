
# ASN-List

实时更新 ZM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNZM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ZM/ASN.ZM.yaml"
    path: ./ruleset/ASN.ZM.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNZM:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ZM/ASN.ZM.yaml"
    path: ./ruleset/ASN.ZM.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ZMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ZM/CIDR.ZM.yaml"
    path: ./ruleset/ZMcidr.yaml
</code></pre>