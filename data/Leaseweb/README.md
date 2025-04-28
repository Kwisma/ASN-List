
# ASN-List

实时更新 Leaseweb 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Leasewebasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Leaseweb/Leaseweb_ASN.yaml"
    path: ./ruleset/Leaseweb_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Leasewebasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Leaseweb/Leaseweb_ASN.yaml"
    path: ./ruleset/Leaseweb_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Leasewebcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Leaseweb/Leaseweb_IP.yaml"
    path: ./ruleset/Leaseweb_IP.yaml
</code></pre>