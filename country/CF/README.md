
# ASN-List

实时更新 CF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNCF:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CF/ASN.CF.yaml"
    path: ./ruleset/ASN.CF.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNCF:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CF/ASN.CF.yaml"
    path: ./ruleset/ASN.CF.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CF/CIDR.CF.yaml"
    path: ./ruleset/CFcidr.yaml
</code></pre>