
# ASN-List

实时更新 MC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MCasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MC/MC_ASN.yaml"
    path: ./ruleset/MC_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MCasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MC/MC_ASN.yaml"
    path: ./ruleset/MC_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MC/MC_IP.yaml"
    path: ./ruleset/MC_IP.yaml
</code></pre>