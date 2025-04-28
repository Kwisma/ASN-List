
# ASN-List

实时更新 GL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GLasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GL/GL_ASN.yaml"
    path: ./ruleset/GL_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GLasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GL/GL_ASN.yaml"
    path: ./ruleset/GL_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GL/GL_IP.yaml"
    path: ./ruleset/GL_IP.yaml
</code></pre>