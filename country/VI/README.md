
# ASN-List

实时更新 VI 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  VIasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/VI/VI_ASN.yaml"
    path: ./ruleset/VI_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VIasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VI/VI_ASN.yaml"
    path: ./ruleset/VI_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  VIcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/VI/VI_IP.yaml"
    path: ./ruleset/VI_IP.yaml
</code></pre>