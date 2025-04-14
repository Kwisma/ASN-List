
# ASN-List

实时更新 SK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SK/ASN.SK.yaml"
    path: ./ruleset/ASN.SK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SK/ASN.SK.yaml"
    path: ./ruleset/ASN.SK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SK/CIDR.SK.yaml"
    path: ./ruleset/SKcidr.yaml
</code></pre>