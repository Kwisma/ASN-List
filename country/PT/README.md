
# ASN-List

实时更新 PT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PTasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PT/PT_ASN.yaml"
    path: ./ruleset/PT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PTasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PT/PT_ASN.yaml"
    path: ./ruleset/PT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PT/PT_IP.yaml"
    path: ./ruleset/PT_IP.yaml
</code></pre>