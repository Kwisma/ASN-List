
# ASN-List

实时更新 SA 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  SAasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/SA/SA_ASN.yaml"
    path: ./ruleset/SA_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SAasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SA/SA_ASN.yaml"
    path: ./ruleset/SA_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  SAcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/SA/SA_IP.yaml"
    path: ./ruleset/SA_IP.yaml
</code></pre>