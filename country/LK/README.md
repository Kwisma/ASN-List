
# ASN-List

实时更新 LK 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLK:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LK/ASN.LK.yaml"
    path: ./ruleset/ASN.LK.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLK:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LK/ASN.LK.yaml"
    path: ./ruleset/ASN.LK.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LKcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LK/CIDR.LK.yaml"
    path: ./ruleset/LKcidr.yaml
</code></pre>