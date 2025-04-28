
# ASN-List

实时更新 GI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GIasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GI/GI_ASN.yaml"
    path: ./ruleset/GI_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GIasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GI/GI_ASN.yaml"
    path: ./ruleset/GI_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GI/GI_IP.yaml"
    path: ./ruleset/GI_IP.yaml
</code></pre>