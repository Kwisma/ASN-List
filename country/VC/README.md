
# ASN-List

实时更新 VC 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  VCasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VC/VC_ASN.yaml"
    path: ./ruleset/VC_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VCasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VC/VC_ASN.yaml"
    path: ./ruleset/VC_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VCcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VC/VC_IP.yaml"
    path: ./ruleset/VC_IP.yaml
</code></pre>