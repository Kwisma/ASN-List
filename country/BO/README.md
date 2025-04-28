
# ASN-List

实时更新 BO 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BOasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BO/BO_ASN.yaml"
    path: ./ruleset/BO_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BOasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BO/BO_ASN.yaml"
    path: ./ruleset/BO_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BOcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BO/BO_IP.yaml"
    path: ./ruleset/BO_IP.yaml
</code></pre>