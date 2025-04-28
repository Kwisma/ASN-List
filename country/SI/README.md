
# ASN-List

实时更新 SI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SIasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SI/SI_ASN.yaml"
    path: ./ruleset/SI_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SIasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SI/SI_ASN.yaml"
    path: ./ruleset/SI_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SI/SI_IP.yaml"
    path: ./ruleset/SI_IP.yaml
</code></pre>