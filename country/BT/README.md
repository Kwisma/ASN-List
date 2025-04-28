
# ASN-List

实时更新 BT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BTasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BT/BT_ASN.yaml"
    path: ./ruleset/BT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BTasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BT/BT_ASN.yaml"
    path: ./ruleset/BT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BT/BT_IP.yaml"
    path: ./ruleset/BT_IP.yaml
</code></pre>