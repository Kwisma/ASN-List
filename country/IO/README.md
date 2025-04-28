
# ASN-List

实时更新 IO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  IOasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IO/IO_ASN.yaml"
    path: ./ruleset/IO_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IOasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IO/IO_ASN.yaml"
    path: ./ruleset/IO_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IO/IO_IP.yaml"
    path: ./ruleset/IO_IP.yaml
</code></pre>