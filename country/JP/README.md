
# ASN-List

实时更新 JP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNJP:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/JP/ASN.JP.yaml"
    path: ./ruleset/ASN.JP.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNJP:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JP/ASN.JP.yaml"
    path: ./ruleset/ASN.JP.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  JPcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JP/CIDR.JP.yaml"
    path: ./ruleset/JPcidr.yaml
</code></pre>