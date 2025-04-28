
# ASN-List

实时更新 TO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TOasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TO/TO_ASN.yaml"
    path: ./ruleset/TO_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TOasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TO/TO_ASN.yaml"
    path: ./ruleset/TO_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TO/TO_IP.yaml"
    path: ./ruleset/TO_IP.yaml
</code></pre>