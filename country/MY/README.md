
# ASN-List

实时更新 MY 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MYasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MY/MY_ASN.yaml"
    path: ./ruleset/MY_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MYasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MY/MY_ASN.yaml"
    path: ./ruleset/MY_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MYcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MY/MY_IP.yaml"
    path: ./ruleset/MY_IP.yaml
</code></pre>