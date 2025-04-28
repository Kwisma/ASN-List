
# ASN-List

实时更新 DO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  DOasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/DO/DO_ASN.yaml"
    path: ./ruleset/DO_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DOasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DO/DO_ASN.yaml"
    path: ./ruleset/DO_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  DOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/DO/DO_IP.yaml"
    path: ./ruleset/DO_IP.yaml
</code></pre>