
# ASN-List

实时更新 ID 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  IDasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ID/ID_ASN.yaml"
    path: ./ruleset/ID_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IDasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ID/ID_ASN.yaml"
    path: ./ruleset/ID_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IDcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ID/ID_IP.yaml"
    path: ./ruleset/ID_IP.yaml
</code></pre>