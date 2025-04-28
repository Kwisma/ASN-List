
# ASN-List

实时更新 PW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PWasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PW/PW_ASN.yaml"
    path: ./ruleset/PW_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PWasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PW/PW_ASN.yaml"
    path: ./ruleset/PW_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PW/PW_IP.yaml"
    path: ./ruleset/PW_IP.yaml
</code></pre>