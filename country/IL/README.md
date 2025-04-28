
# ASN-List

实时更新 IL 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  ILasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/IL/IL_ASN.yaml"
    path: ./ruleset/IL_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ILasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IL/IL_ASN.yaml"
    path: ./ruleset/IL_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  ILcidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/IL/IL_IP.yaml"
    path: ./ruleset/IL_IP.yaml
</code></pre>