
# ASN-List

实时更新 MW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MWasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MW/MW_ASN.yaml"
    path: ./ruleset/MW_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MWasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MW/MW_ASN.yaml"
    path: ./ruleset/MW_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MW/MW_IP.yaml"
    path: ./ruleset/MW_IP.yaml
</code></pre>