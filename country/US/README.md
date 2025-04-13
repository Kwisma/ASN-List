
# ASN-List

实时更新 US 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNUS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/US/ASN.US.yaml"
    path: ./ruleset/ASN.US.yaml
    interval: 86400
    format: yaml
</code></pre>