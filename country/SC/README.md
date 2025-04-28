
# ASN-List

实时更新 SC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SCasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SC/SC_ASN.yaml"
    path: ./ruleset/SC_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SCasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SC/SC_ASN.yaml"
    path: ./ruleset/SC_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SC/SC_IP.yaml"
    path: ./ruleset/SC_IP.yaml
</code></pre>