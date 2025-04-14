
# ASN-List

实时更新 SR 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNSR:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SR/ASN.SR.yaml"
    path: ./ruleset/ASN.SR.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNSR:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SR/ASN.SR.yaml"
    path: ./ruleset/ASN.SR.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SRcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SR/CIDR.SR.yaml"
    path: ./ruleset/SRcidr.yaml
</code></pre>