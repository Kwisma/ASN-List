
# ASN-List

实时更新 Tencent 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  Tencentasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tencent/Tencent_ASN.yaml"
    path: ./ruleset/Tencent_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Tencentasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tencent/Tencent_ASN.yaml"
    path: ./ruleset/Tencent_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Tencentcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tencent/Tencent_IP.yaml"
    path: ./ruleset/Tencent_IP.yaml
</code></pre>