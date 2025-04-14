
# ASN-List

实时更新 RE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNRE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RE/ASN.RE.yaml"
    path: ./ruleset/ASN.RE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNRE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RE/ASN.RE.yaml"
    path: ./ruleset/ASN.RE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  REcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RE/CIDR.RE.yaml"
    path: ./ruleset/REcidr.yaml
</code></pre>