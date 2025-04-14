
# ASN-List

实时更新 IQ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIQ:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IQ/ASN.IQ.yaml"
    path: ./ruleset/ASN.IQ.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNIQ:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IQ/ASN.IQ.yaml"
    path: ./ruleset/ASN.IQ.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IQcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IQ/CIDR.IQ.yaml"
    path: ./ruleset/IQcidr.yaml
</code></pre>