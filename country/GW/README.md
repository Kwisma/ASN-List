
# ASN-List

实时更新 GW 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNGW:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GW/ASN.GW.yaml"
    path: ./ruleset/ASN.GW.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNGW:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GW/ASN.GW.yaml"
    path: ./ruleset/ASN.GW.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GWcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GW/CIDR.GW.yaml"
    path: ./ruleset/GWcidr.yaml
</code></pre>