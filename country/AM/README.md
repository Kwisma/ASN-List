
# ASN-List

实时更新 AM 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  AMasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/AM/AM_ASN.yaml"
    path: ./ruleset/AM_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AMasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AM/AM_ASN.yaml"
    path: ./ruleset/AM_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  AMcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/AM/AM_IP.yaml"
    path: ./ruleset/AM_IP.yaml
</code></pre>