
# ASN-List

实时更新 AG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAG:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AG/ASN.AG.yaml"
    path: ./ruleset/ASN.AG.yaml
    interval: 86400
    format: yaml
</code></pre>