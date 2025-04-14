
# ASN-List

实时更新 VA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNVA:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VA/ASN.VA.yaml"
    path: ./ruleset/ASN.VA.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNVA:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VA/ASN.VA.yaml"
    path: ./ruleset/ASN.VA.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VA/CIDR.VA.yaml"
    path: ./ruleset/VAcidr.yaml
</code></pre>