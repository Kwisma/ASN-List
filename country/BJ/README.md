
# ASN-List

实时更新 BJ 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BJasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BJ/BJ_ASN.yaml"
    path: ./ruleset/BJ_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BJasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BJ/BJ_ASN.yaml"
    path: ./ruleset/BJ_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BJcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BJ/BJ_IP.yaml"
    path: ./ruleset/BJ_IP.yaml
</code></pre>