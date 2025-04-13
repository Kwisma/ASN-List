
# ASN-List

实时更新 IM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIM:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IM/ASN.IM.yaml"
    path: ./ruleset/ASN.IM.yaml
    interval: 86400
    format: yaml
</code></pre>