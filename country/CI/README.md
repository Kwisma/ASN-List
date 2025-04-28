
# ASN-List

实时更新 CI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CIasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CI/CI_ASN.yaml"
    path: ./ruleset/CI_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CIasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CI/CI_ASN.yaml"
    path: ./ruleset/CI_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CI/CI_IP.yaml"
    path: ./ruleset/CI_IP.yaml
</code></pre>