
# ASN-List

实时更新 SR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SRasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SR/SR_ASN.yaml"
    path: ./ruleset/SR_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SRasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SR/SR_ASN.yaml"
    path: ./ruleset/SR_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SR/SR_IP.yaml"
    path: ./ruleset/SR_IP.yaml
</code></pre>