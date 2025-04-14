
# ASN-List

实时更新 MC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNMC:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MC/ASN.MC.yaml"
    path: ./ruleset/ASN.MC.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNMC:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MC/ASN.MC.yaml"
    path: ./ruleset/ASN.MC.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MC/CIDR.MC.yaml"
    path: ./ruleset/MCcidr.yaml
</code></pre>