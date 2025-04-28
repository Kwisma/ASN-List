
# ASN-List

实时更新 MX 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MXasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MX/MX_ASN.yaml"
    path: ./ruleset/MX_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MXasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MX/MX_ASN.yaml"
    path: ./ruleset/MX_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MXcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MX/MX_IP.yaml"
    path: ./ruleset/MX_IP.yaml
</code></pre>