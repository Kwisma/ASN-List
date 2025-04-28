
# ASN-List

实时更新 NL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NLasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NL/NL_ASN.yaml"
    path: ./ruleset/NL_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NLasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NL/NL_ASN.yaml"
    path: ./ruleset/NL_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NL/NL_IP.yaml"
    path: ./ruleset/NL_IP.yaml
</code></pre>