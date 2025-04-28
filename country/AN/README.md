
# ASN-List

实时更新 AN 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ANasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AN/AN_ASN.yaml"
    path: ./ruleset/AN_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ANasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AN/AN_ASN.yaml"
    path: ./ruleset/AN_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ANcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AN/AN_IP.yaml"
    path: ./ruleset/AN_IP.yaml
</code></pre>