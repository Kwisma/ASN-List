
# ASN-List

实时更新 PF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PF/ASN.PF.yaml"
    path: ./ruleset/ASN.PF.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPF:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PF/ASN.PF.yaml"
    path: ./ruleset/ASN.PF.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PF/CIDR.PF.yaml"
    path: ./ruleset/PFcidr.yaml
</code></pre>