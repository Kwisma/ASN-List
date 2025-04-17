
# ASN-List

实时更新 Tencent 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ASNTencent:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/data/Tencent/ASN.Tencent.yaml"
    path: ./ruleset/ASN.Tencent.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ASNTencent:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tencent/ASN.Tencent.yaml"
    path: ./ruleset/ASN.Tencent.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  Tencentcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/data/Tencent/CIDR.Tencent.yaml"
    path: ./ruleset/Tencentcidr.yaml
</code></pre>