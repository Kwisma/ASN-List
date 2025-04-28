
# ASN-List

实时更新 GH 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  GHasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/GH/GH_ASN.yaml"
    path: ./ruleset/GH_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GHasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GH/GH_ASN.yaml"
    path: ./ruleset/GH_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  GHcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/GH/GH_IP.yaml"
    path: ./ruleset/GH_IP.yaml
</code></pre>