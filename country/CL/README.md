
# ASN-List

实时更新 CL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CLasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CL/CL_ASN.yaml"
    path: ./ruleset/CL_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CLasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CL/CL_ASN.yaml"
    path: ./ruleset/CL_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CL/CL_IP.yaml"
    path: ./ruleset/CL_IP.yaml
</code></pre>