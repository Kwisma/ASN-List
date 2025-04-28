
# ASN-List

实时更新 JE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  JEasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/JE/JE_ASN.yaml"
    path: ./ruleset/JE_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  JEasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JE/JE_ASN.yaml"
    path: ./ruleset/JE_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  JEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JE/JE_IP.yaml"
    path: ./ruleset/JE_IP.yaml
</code></pre>