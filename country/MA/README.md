
# ASN-List

实时更新 MA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  MAasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/MA/MA_ASN.yaml"
    path: ./ruleset/MA_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MAasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MA/MA_ASN.yaml"
    path: ./ruleset/MA_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  MAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/MA/MA_IP.yaml"
    path: ./ruleset/MA_IP.yaml
</code></pre>