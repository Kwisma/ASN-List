
# ASN-List

实时更新 PR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNPR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/PR/ASN.PR.yaml"
    path: ./ruleset/ASN.PR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNPR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PR/ASN.PR.yaml"
    path: ./ruleset/ASN.PR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  PRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/PR/CIDR.PR.yaml"
    path: ./ruleset/PRcidr.yaml
</code></pre>