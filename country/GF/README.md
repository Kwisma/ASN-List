
# ASN-List

实时更新 GF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GF/ASN.GF.yaml"
    path: ./ruleset/ASN.GF.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGF:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GF/ASN.GF.yaml"
    path: ./ruleset/ASN.GF.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GF/CIDR.GF.yaml"
    path: ./ruleset/GFcidr.yaml
</code></pre>