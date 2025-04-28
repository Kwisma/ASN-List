
# ASN-List

实时更新 PR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  PRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PR/PR_ASN.yaml"
    path: ./ruleset/PR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PR/PR_ASN.yaml"
    path: ./ruleset/PR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PR/PR_IP.yaml"
    path: ./ruleset/PR_IP.yaml
</code></pre>