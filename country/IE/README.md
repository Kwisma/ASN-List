
# ASN-List

实时更新 IE 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNIE:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IE/ASN.IE.yaml"
    path: ./ruleset/ASN.IE.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNIE:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IE/ASN.IE.yaml"
    path: ./ruleset/ASN.IE.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  IEcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IE/CIDR.IE.yaml"
    path: ./ruleset/IEcidr.yaml
</code></pre>