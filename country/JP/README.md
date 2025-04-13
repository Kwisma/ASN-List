
# ASN-List

实时更新 JP 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNJP:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/JP/ASN.JP.yaml"
    path: ./ruleset/ASN.JP.yaml
    interval: 86400
    format: yaml
</code></pre>