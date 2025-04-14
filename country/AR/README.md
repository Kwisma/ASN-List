
# ASN-List

实时更新 AR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNAR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AR/ASN.AR.yaml"
    path: ./ruleset/ASN.AR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNAR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AR/ASN.AR.yaml"
    path: ./ruleset/ASN.AR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ARcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AR/CIDR.AR.yaml"
    path: ./ruleset/ARcidr.yaml
</code></pre>