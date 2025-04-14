
# ASN-List

实时更新 TR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TR/ASN.TR.yaml"
    path: ./ruleset/ASN.TR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TR/ASN.TR.yaml"
    path: ./ruleset/ASN.TR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TR/CIDR.TR.yaml"
    path: ./ruleset/TRcidr.yaml
</code></pre>