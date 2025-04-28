
# ASN-List

实时更新 AW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  AWasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AW/AW_ASN.yaml"
    path: ./ruleset/AW_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AWasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AW/AW_ASN.yaml"
    path: ./ruleset/AW_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AW/AW_IP.yaml"
    path: ./ruleset/AW_IP.yaml
</code></pre>