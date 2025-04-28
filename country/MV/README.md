
# ASN-List

实时更新 MV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MVasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MV/MV_ASN.yaml"
    path: ./ruleset/MV_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MVasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MV/MV_ASN.yaml"
    path: ./ruleset/MV_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MVcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MV/MV_IP.yaml"
    path: ./ruleset/MV_IP.yaml
</code></pre>