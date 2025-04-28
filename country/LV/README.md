
# ASN-List

实时更新 LV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  LVasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/LV/LV_ASN.yaml"
    path: ./ruleset/LV_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LVasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LV/LV_ASN.yaml"
    path: ./ruleset/LV_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  LVcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/LV/LV_IP.yaml"
    path: ./ruleset/LV_IP.yaml
</code></pre>