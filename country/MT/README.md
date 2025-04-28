
# ASN-List

实时更新 MT 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MTasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MT/MT_ASN.yaml"
    path: ./ruleset/MT_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MTasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MT/MT_ASN.yaml"
    path: ./ruleset/MT_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MTcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MT/MT_IP.yaml"
    path: ./ruleset/MT_IP.yaml
</code></pre>