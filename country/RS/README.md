
# ASN-List

实时更新 RS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  RSasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/RS/RS_ASN.yaml"
    path: ./ruleset/RS_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  RSasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RS/RS_ASN.yaml"
    path: ./ruleset/RS_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  RScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/RS/RS_IP.yaml"
    path: ./ruleset/RS_IP.yaml
</code></pre>