
# ASN-List

实时更新 US 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNUS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/US/ASN.US.yaml"
    path: ./ruleset/ASN.US.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNUS:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/US/ASN.US.yaml"
    path: ./ruleset/ASN.US.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  UScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/US/CIDR.US.yaml"
    path: ./ruleset/UScidr.yaml
</code></pre>