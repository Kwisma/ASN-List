
# ASN-List

实时更新 GR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GR/ASN.GR.yaml"
    path: ./ruleset/ASN.GR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GR/ASN.GR.yaml"
    path: ./ruleset/ASN.GR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GR/CIDR.GR.yaml"
    path: ./ruleset/GRcidr.yaml
</code></pre>