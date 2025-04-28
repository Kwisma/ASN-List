
# ASN-List

实时更新 DK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  DKasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DK/DK_ASN.yaml"
    path: ./ruleset/DK_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DKasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DK/DK_ASN.yaml"
    path: ./ruleset/DK_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DK/DK_IP.yaml"
    path: ./ruleset/DK_IP.yaml
</code></pre>