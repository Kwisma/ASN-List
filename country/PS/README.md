
# ASN-List

实时更新 PS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PSasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PS/PS_ASN.yaml"
    path: ./ruleset/PS_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PSasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PS/PS_ASN.yaml"
    path: ./ruleset/PS_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PS/PS_IP.yaml"
    path: ./ruleset/PS_IP.yaml
</code></pre>