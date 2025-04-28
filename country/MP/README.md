
# ASN-List

实时更新 MP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MPasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MP/MP_ASN.yaml"
    path: ./ruleset/MP_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MPasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MP/MP_ASN.yaml"
    path: ./ruleset/MP_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MPcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MP/MP_IP.yaml"
    path: ./ruleset/MP_IP.yaml
</code></pre>