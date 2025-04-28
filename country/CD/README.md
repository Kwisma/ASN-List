
# ASN-List

实时更新 CD 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CDasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CD/CD_ASN.yaml"
    path: ./ruleset/CD_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CDasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CD/CD_ASN.yaml"
    path: ./ruleset/CD_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CD/CD_IP.yaml"
    path: ./ruleset/CD_IP.yaml
</code></pre>