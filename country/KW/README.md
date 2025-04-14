
# ASN-List

实时更新 KW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNKW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/KW/ASN.KW.yaml"
    path: ./ruleset/ASN.KW.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNKW:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KW/ASN.KW.yaml"
    path: ./ruleset/ASN.KW.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  KWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/KW/CIDR.KW.yaml"
    path: ./ruleset/KWcidr.yaml
</code></pre>