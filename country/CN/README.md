
# ASN-List

实时更新 CN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CNasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CN/CN_ASN.yaml"
    path: ./ruleset/CN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CNasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CN/CN_ASN.yaml"
    path: ./ruleset/CN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CNcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CN/CN_IP.yaml"
    path: ./ruleset/CN_IP.yaml
</code></pre>