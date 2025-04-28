
# ASN-List

实时更新 NP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  NPasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/NP/NP_ASN.yaml"
    path: ./ruleset/NP_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NPasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NP/NP_ASN.yaml"
    path: ./ruleset/NP_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  NPcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/NP/NP_IP.yaml"
    path: ./ruleset/NP_IP.yaml
</code></pre>