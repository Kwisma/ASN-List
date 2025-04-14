
# ASN-List

实时更新 SE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SE/ASN.SE.yaml"
    path: ./ruleset/ASN.SE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SE/ASN.SE.yaml"
    path: ./ruleset/ASN.SE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SE/CIDR.SE.yaml"
    path: ./ruleset/SEcidr.yaml
</code></pre>