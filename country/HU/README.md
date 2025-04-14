
# ASN-List

实时更新 HU 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNHU:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/HU/ASN.HU.yaml"
    path: ./ruleset/ASN.HU.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNHU:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HU/ASN.HU.yaml"
    path: ./ruleset/ASN.HU.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  HUcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/HU/CIDR.HU.yaml"
    path: ./ruleset/HUcidr.yaml
</code></pre>