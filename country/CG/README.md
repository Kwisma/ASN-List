
# ASN-List

实时更新 CG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CG/ASN.CG.yaml"
    path: ./ruleset/ASN.CG.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCG:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CG/ASN.CG.yaml"
    path: ./ruleset/ASN.CG.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CG/CIDR.CG.yaml"
    path: ./ruleset/CGcidr.yaml
</code></pre>