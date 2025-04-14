
# ASN-List

实时更新 ET 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNET:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/ET/ASN.ET.yaml"
    path: ./ruleset/ASN.ET.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNET:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ET/ASN.ET.yaml"
    path: ./ruleset/ASN.ET.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ETcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/ET/CIDR.ET.yaml"
    path: ./ruleset/ETcidr.yaml
</code></pre>