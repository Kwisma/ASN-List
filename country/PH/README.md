
# ASN-List

实时更新 PH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PHasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PH/PH_ASN.yaml"
    path: ./ruleset/PH_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PHasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PH/PH_ASN.yaml"
    path: ./ruleset/PH_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PH/PH_IP.yaml"
    path: ./ruleset/PH_IP.yaml
</code></pre>