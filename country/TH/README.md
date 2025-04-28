
# ASN-List

实时更新 TH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  THasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TH/TH_ASN.yaml"
    path: ./ruleset/TH_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  THasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TH/TH_ASN.yaml"
    path: ./ruleset/TH_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  THcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TH/TH_IP.yaml"
    path: ./ruleset/TH_IP.yaml
</code></pre>