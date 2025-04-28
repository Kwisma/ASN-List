
# ASN-List

实时更新 CV 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  CVasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/CV/CV_ASN.yaml"
    path: ./ruleset/CV_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CVasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CV/CV_ASN.yaml"
    path: ./ruleset/CV_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  CVcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/CV/CV_IP.yaml"
    path: ./ruleset/CV_IP.yaml
</code></pre>