
# ASN-List

实时更新 KR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KR/ASN.KR.yaml"
    path: ./ruleset/ASN.KR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KR/ASN.KR.yaml"
    path: ./ruleset/ASN.KR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KR/CIDR.KR.yaml"
    path: ./ruleset/KRcidr.yaml
</code></pre>