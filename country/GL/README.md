
# ASN-List

实时更新 GL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGL:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GL/ASN.GL.yaml"
    path: ./ruleset/ASN.GL.yaml
    interval: 86400
    format: yaml
</code></pre>