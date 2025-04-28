
# ASN-List

实时更新 BL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BLasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BL/BL_ASN.yaml"
    path: ./ruleset/BL_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BLasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BL/BL_ASN.yaml"
    path: ./ruleset/BL_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BLcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BL/BL_IP.yaml"
    path: ./ruleset/BL_IP.yaml
</code></pre>