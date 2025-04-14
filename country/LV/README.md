
# ASN-List

实时更新 LV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNLV:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LV/ASN.LV.yaml"
    path: ./ruleset/ASN.LV.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNLV:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LV/ASN.LV.yaml"
    path: ./ruleset/ASN.LV.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LVcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LV/CIDR.LV.yaml"
    path: ./ruleset/LVcidr.yaml
</code></pre>