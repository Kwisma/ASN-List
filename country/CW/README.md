
# ASN-List

实时更新 CW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CWasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CW/CW_ASN.yaml"
    path: ./ruleset/CW_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CWasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CW/CW_ASN.yaml"
    path: ./ruleset/CW_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CW/CW_IP.yaml"
    path: ./ruleset/CW_IP.yaml
</code></pre>