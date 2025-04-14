
# ASN-List

实时更新 BS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNBS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BS/ASN.BS.yaml"
    path: ./ruleset/ASN.BS.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNBS:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BS/ASN.BS.yaml"
    path: ./ruleset/ASN.BS.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BS/CIDR.BS.yaml"
    path: ./ruleset/BScidr.yaml
</code></pre>