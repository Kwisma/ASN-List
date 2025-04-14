
# ASN-List

实时更新 ME 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNME:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ME/ASN.ME.yaml"
    path: ./ruleset/ASN.ME.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNME:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ME/ASN.ME.yaml"
    path: ./ruleset/ASN.ME.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ME/CIDR.ME.yaml"
    path: ./ruleset/MEcidr.yaml
</code></pre>