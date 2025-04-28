
# ASN-List

实时更新 CA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CAasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CA/CA_ASN.yaml"
    path: ./ruleset/CA_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CAasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CA/CA_ASN.yaml"
    path: ./ruleset/CA_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CA/CA_IP.yaml"
    path: ./ruleset/CA_IP.yaml
</code></pre>