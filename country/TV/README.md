
# ASN-List

实时更新 TV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  TVasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/TV/TV_ASN.yaml"
    path: ./ruleset/TV_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TVasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TV/TV_ASN.yaml"
    path: ./ruleset/TV_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  TVcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/TV/TV_IP.yaml"
    path: ./ruleset/TV_IP.yaml
</code></pre>