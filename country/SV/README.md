
# ASN-List

实时更新 SV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SVasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SV/SV_ASN.yaml"
    path: ./ruleset/SV_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SVasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SV/SV_ASN.yaml"
    path: ./ruleset/SV_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SVcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SV/SV_IP.yaml"
    path: ./ruleset/SV_IP.yaml
</code></pre>