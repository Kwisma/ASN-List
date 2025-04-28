
# ASN-List

实时更新 CF 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CFasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CF/CF_ASN.yaml"
    path: ./ruleset/CF_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CFasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CF/CF_ASN.yaml"
    path: ./ruleset/CF_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CFcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CF/CF_IP.yaml"
    path: ./ruleset/CF_IP.yaml
</code></pre>