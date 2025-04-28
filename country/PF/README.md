
# ASN-List

实时更新 PF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PFasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PF/PF_ASN.yaml"
    path: ./ruleset/PF_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PFasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PF/PF_ASN.yaml"
    path: ./ruleset/PF_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PF/PF_IP.yaml"
    path: ./ruleset/PF_IP.yaml
</code></pre>