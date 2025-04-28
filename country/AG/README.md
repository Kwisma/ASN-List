
# ASN-List

实时更新 AG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  AGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AG/AG_ASN.yaml"
    path: ./ruleset/AG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AG/AG_ASN.yaml"
    path: ./ruleset/AG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AG/AG_IP.yaml"
    path: ./ruleset/AG_IP.yaml
</code></pre>