
# ASN-List

实时更新 FK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNFK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/FK/ASN.FK.yaml"
    path: ./ruleset/ASN.FK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNFK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FK/ASN.FK.yaml"
    path: ./ruleset/ASN.FK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  FKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/FK/CIDR.FK.yaml"
    path: ./ruleset/FKcidr.yaml
</code></pre>