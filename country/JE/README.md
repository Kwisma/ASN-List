
# ASN-List

实时更新 JE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNJE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/JE/ASN.JE.yaml"
    path: ./ruleset/ASN.JE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNJE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JE/ASN.JE.yaml"
    path: ./ruleset/ASN.JE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  JEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/JE/CIDR.JE.yaml"
    path: ./ruleset/JEcidr.yaml
</code></pre>