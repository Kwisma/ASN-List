
# ASN-List

实时更新 GW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GWasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GW/GW_ASN.yaml"
    path: ./ruleset/GW_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GWasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GW/GW_ASN.yaml"
    path: ./ruleset/GW_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GW/GW_IP.yaml"
    path: ./ruleset/GW_IP.yaml
</code></pre>