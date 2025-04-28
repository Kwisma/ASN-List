
# ASN-List

实时更新 KR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  KRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KR/KR_ASN.yaml"
    path: ./ruleset/KR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KR/KR_ASN.yaml"
    path: ./ruleset/KR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KR/KR_IP.yaml"
    path: ./ruleset/KR_IP.yaml
</code></pre>