
# ASN-List

实时更新 LB 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LBasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LB/LB_ASN.yaml"
    path: ./ruleset/LB_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LBasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LB/LB_ASN.yaml"
    path: ./ruleset/LB_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LBcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LB/LB_IP.yaml"
    path: ./ruleset/LB_IP.yaml
</code></pre>