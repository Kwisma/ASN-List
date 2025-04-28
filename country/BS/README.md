
# ASN-List

实时更新 BS 的 ASN 和 IP 数据库。

<pre><code class="language-javascript">
rule-providers:
  BSasn:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Kwisma/ASN-List/refs/heads/main/country/BS/BS_ASN.yaml"
    path: ./ruleset/BS_ASN.yaml
    interval: 86400
    format: yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BSasn:
    <<: *classical
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BS/BS_ASN.yaml"
    path: ./ruleset/BS_ASN.yaml
</code></pre>

<pre><code class="language-javascript">
rule-providers:
  BScidr:
    <<: *ipcidr
    url: "https://jsd.onmicrosoft.cn/gh/Kwisma/ASN-List@main/country/BS/BS_IP.yaml"
    path: ./ruleset/BS_IP.yaml
</code></pre>