
# ASN-List

实时更新 SB 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SBasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SB/SB_ASN.yaml"
    path: ./ruleset/SB_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SBasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SB/SB_ASN.yaml"
    path: ./ruleset/SB_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SBcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SB/SB_IP.yaml"
    path: ./ruleset/SB_IP.yaml
</code></pre>