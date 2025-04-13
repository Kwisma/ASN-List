
# ASN-List

实时更新 Netflix 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNNetflix:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Netflix/ASN.Netflix.yaml"
    path: ./ruleset/ASN.Netflix.yaml
    interval: 86400
    format: yaml
</code></pre>