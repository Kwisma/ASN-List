
# ASN-List

实时更新 GD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GDasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GD/GD_ASN.yaml"
    path: ./ruleset/GD_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GDasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GD/GD_ASN.yaml"
    path: ./ruleset/GD_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GD/GD_IP.yaml"
    path: ./ruleset/GD_IP.yaml
</code></pre>