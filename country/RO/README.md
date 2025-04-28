
# ASN-List

实时更新 RO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ROasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RO/RO_ASN.yaml"
    path: ./ruleset/RO_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ROasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RO/RO_ASN.yaml"
    path: ./ruleset/RO_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ROcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RO/RO_IP.yaml"
    path: ./ruleset/RO_IP.yaml
</code></pre>