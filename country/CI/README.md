
# ASN-List

实时更新 CI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCI:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CI/ASN.CI.yaml"
    path: ./ruleset/ASN.CI.yaml
    interval: 86400
    format: yaml
</code></pre>