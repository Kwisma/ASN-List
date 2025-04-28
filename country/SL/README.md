
# ASN-List

实时更新 SL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SLasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SL/SL_ASN.yaml"
    path: ./ruleset/SL_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SLasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SL/SL_ASN.yaml"
    path: ./ruleset/SL_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SL/SL_IP.yaml"
    path: ./ruleset/SL_IP.yaml
</code></pre>