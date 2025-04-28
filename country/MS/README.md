
# ASN-List

实时更新 MS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MSasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MS/MS_ASN.yaml"
    path: ./ruleset/MS_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MSasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MS/MS_ASN.yaml"
    path: ./ruleset/MS_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MS/MS_IP.yaml"
    path: ./ruleset/MS_IP.yaml
</code></pre>