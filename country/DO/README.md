
# ASN-List

实时更新 DO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNDO:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DO/ASN.DO.yaml"
    path: ./ruleset/ASN.DO.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNDO:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DO/ASN.DO.yaml"
    path: ./ruleset/ASN.DO.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DO/CIDR.DO.yaml"
    path: ./ruleset/DOcidr.yaml
</code></pre>