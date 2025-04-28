
# ASN-List

实时更新 BG 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BGasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BG/BG_ASN.yaml"
    path: ./ruleset/BG_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BGasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BG/BG_ASN.yaml"
    path: ./ruleset/BG_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BGcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BG/BG_IP.yaml"
    path: ./ruleset/BG_IP.yaml
</code></pre>