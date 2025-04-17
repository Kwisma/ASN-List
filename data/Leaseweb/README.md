
# ASN-List

实时更新 Leaseweb 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLeaseweb:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Leaseweb/ASN.Leaseweb.yaml"
    path: ./ruleset/ASN.Leaseweb.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLeaseweb:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Leaseweb/ASN.Leaseweb.yaml"
    path: ./ruleset/ASN.Leaseweb.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Leasewebcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Leaseweb/CIDR.Leaseweb.yaml"
    path: ./ruleset/Leasewebcidr.yaml
</code></pre>