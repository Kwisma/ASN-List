
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

<pre><code class="language-javascript">
rule-providers:
  ASNGL:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GL/ASN.GL.yaml"
    path: ./ruleset/ASN.GL.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GL/CIDR.GL.yaml"
    path: ./ruleset/GLcidr.yaml
</code></pre>