
# ASN-List

实时更新 KE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  KEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KE/KE_ASN.yaml"
    path: ./ruleset/KE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KE/KE_ASN.yaml"
    path: ./ruleset/KE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KE/KE_IP.yaml"
    path: ./ruleset/KE_IP.yaml
</code></pre>