
# ASN-List

实时更新 WS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNWS:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/WS/ASN.WS.yaml"
    path: ./ruleset/ASN.WS.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNWS:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/WS/ASN.WS.yaml"
    path: ./ruleset/ASN.WS.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  WScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/WS/CIDR.WS.yaml"
    path: ./ruleset/WScidr.yaml
</code></pre>