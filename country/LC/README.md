
# ASN-List

实时更新 LC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LCasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LC/LC_ASN.yaml"
    path: ./ruleset/LC_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LCasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LC/LC_ASN.yaml"
    path: ./ruleset/LC_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LC/LC_IP.yaml"
    path: ./ruleset/LC_IP.yaml
</code></pre>